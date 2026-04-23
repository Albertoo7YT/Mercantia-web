# Mercantia · Landing

Landing oficial de Mercantia — Portal B2B de pedidos para comerciales.

## Stack

- **Next.js 15** (App Router) + React 19
- **TypeScript**
- **Tailwind CSS 3.4**
- **PM2** para producción

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Arrancar en modo desarrollo (http://localhost:3004)
npm run dev
```

## Scripts disponibles

- `npm run dev` — Modo desarrollo con hot reload
- `npm run build` — Build de producción
- `npm run start` — Servir build de producción
- `npm run lint` — Linter

---

## Despliegue en VPS (CloudPanel + PM2 + Nginx)

El proceso sigue el mismo patrón que `hwoutdoor-gestion`.

### 1. Crear sitio en CloudPanel

1. Entra a CloudPanel → **+ Add Site** → **Node.js**
2. Configura:
   - **Domain**: `mercantia.tudominio.com` (o el dominio que tengas)
   - **Node.js Version**: 20 LTS o superior
   - **App Port**: `3004`
   - **App Root Directory**: `/htdocs`
3. CloudPanel crea el usuario Linux aislado y el sitio

### 2. Subir el código al VPS

Como usuario del sitio (el que creó CloudPanel):

```bash
# Entrar al directorio del sitio
cd ~/htdocs

# Si usas Git (recomendado)
git clone . https://tu-repo.git .
# O sube los archivos por SFTP
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
nano .env
```

Rellena las variables de SMTP si quieres que el formulario envíe emails reales. Si lo dejas sin configurar, las solicitudes quedan registradas en `pm2 logs`.

### 4. Build inicial

```bash
npm ci
npm run build
```

### 5. Arrancar con PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # si es la primera vez
```

Verificar:

```bash
pm2 status
pm2 logs mercantia-landing
```

### 6. Nginx (reverse proxy)

CloudPanel crea automáticamente la config Nginx que proxea al puerto 3004. Si necesitas ajustarla, está en:

```
/home/<usuario>/conf/nginx/site-enabled/<dominio>.conf
```

Debería incluir un bloque similar a:

```nginx
location / {
    proxy_pass http://127.0.0.1:3004;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### 7. SSL / HTTPS

En CloudPanel → Site → SSL/TLS → **Let's Encrypt** → Renew.

### 8. Deploys posteriores

Una vez desplegado, para actualizar:

```bash
cd ~/htdocs
./deploy.sh
```

Este script hace `git pull`, `npm ci`, `npm run build` y `pm2 reload`.

---

## Estructura

```
mercantia/
├── src/
│   ├── app/
│   │   ├── api/demo/       → API route del formulario
│   │   ├── layout.tsx       → Metadata SEO + fuentes
│   │   ├── page.tsx         → Página principal
│   │   └── globals.css      → Tailwind + estilos globales
│   ├── components/
│   │   ├── sections/        → Hero, Features, FAQ, etc.
│   │   ├── ui/              → Button, Logo, DemoModal
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── HeroMockup.tsx
│   └── lib/
│       └── demo-context.tsx → Context global para abrir el modal
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── ecosystem.config.js      → Config PM2
├── deploy.sh                → Script de deploy
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Email del formulario (opcional)

Cuando quieras activar el envío real de emails:

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

Después edita `src/app/api/demo/route.ts` y descomenta el bloque marcado con `ejemplo con nodemailer`. Rellena las variables SMTP en `.env`.

---

## Puerto usado

- **3004** (no colisiona con tus otros proyectos: 3002 hwoutdoor-gestion, 3003 rulls-tpv)
