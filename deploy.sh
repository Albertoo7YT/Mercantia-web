#!/bin/bash
# Script de deploy para Mercantia
#
# Uso:
#   ./deploy.sh             — pull + deps + migrate + build + pm2 reload
#   ./deploy.sh --backup    — además dump de la DB antes de migrar
#   ./deploy.sh --no-build  — salta el build (útil si solo cambian datos/config)
#
# Requiere: .env con DATABASE_URL y SESSION_SECRET, PM2 instalado, pg_dump si usas --backup.

set -euo pipefail

# ─── Colores ──────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m'

step()  { echo -e "${BLUE}▸${NC} $1"; }
ok()    { echo -e "${GREEN}✓${NC} $1"; }
warn()  { echo -e "${YELLOW}⚠${NC} $1"; }
fail()  { echo -e "${RED}✗${NC} $1"; exit 1; }

# ─── Flags ────────────────────────────────────────────────
DO_BACKUP=false
DO_BUILD=true
for arg in "$@"; do
  case "$arg" in
    --backup)   DO_BACKUP=true ;;
    --no-build) DO_BUILD=false ;;
    *) fail "Argumento desconocido: $arg" ;;
  esac
done

# ─── Sanity checks ────────────────────────────────────────
[ -f package.json ] || fail "No estás en la raíz del proyecto (no hay package.json)."
[ -f .env ]         || fail "No existe .env. Crea uno con DATABASE_URL, SESSION_SECRET..."

grep -q '^DATABASE_URL=' .env  || fail "DATABASE_URL no está definida en .env"
grep -q '^SESSION_SECRET=' .env || warn "SESSION_SECRET no está definida en .env (necesario para login)"

# Extrae DATABASE_URL para usarla con pg_dump (sin exportar el resto del .env)
DATABASE_URL=$(grep '^DATABASE_URL=' .env | sed 's/^DATABASE_URL=//; s/^"//; s/"$//; s/^'\''//; s/'\''$//')

echo ""
echo "🚀  Desplegando Mercantia"
echo ""

# ─── 1. Backup opcional ───────────────────────────────────
if $DO_BACKUP; then
  step "Backup de la base de datos..."
  TS=$(date +%Y%m%d-%H%M%S)
  BACKUP_DIR="${HOME}/mercantia-backups"
  mkdir -p "$BACKUP_DIR"
  if command -v pg_dump >/dev/null 2>&1; then
    pg_dump "$DATABASE_URL" --no-owner --no-acl > "$BACKUP_DIR/mercantia-${TS}.sql"
    ok "Backup → $BACKUP_DIR/mercantia-${TS}.sql"
  else
    warn "pg_dump no encontrado, salto backup"
  fi
fi

# ─── 2. Pull ──────────────────────────────────────────────
step "Obteniendo últimos cambios..."
git pull origin main

# ─── 3. Install ───────────────────────────────────────────
step "Instalando dependencias..."
npm ci --include=dev

# ─── 4. Prisma ────────────────────────────────────────────
step "Generando cliente de Prisma..."
npx prisma generate

step "Aplicando migraciones pendientes..."
npx prisma migrate deploy

# ─── 5. Build ─────────────────────────────────────────────
if $DO_BUILD; then
  step "Construyendo aplicación..."
  npm run build
else
  warn "Build omitido (--no-build)"
fi

# ─── 6. PM2 ───────────────────────────────────────────────
if pm2 describe mercantia-landing >/dev/null 2>&1; then
  step "Recargando PM2..."
  pm2 reload ecosystem.config.js --update-env
else
  step "Primer arranque con PM2..."
  pm2 start ecosystem.config.js
fi
pm2 save

echo ""
ok "Deploy completado"
echo ""
pm2 status mercantia-landing
