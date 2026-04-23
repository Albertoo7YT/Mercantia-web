#!/bin/bash
# Script de deploy para Mercantia Landing
# Ejecuta: ./deploy.sh

set -e

echo "🚀 Desplegando Mercantia Landing..."
echo ""

# 1. Pull
echo "📥 Obteniendo últimos cambios..."
git pull origin main

# 2. Install
echo "📦 Instalando dependencias..."
npm ci --production=false

# 3. Build
echo "🔨 Construyendo aplicación..."
npm run build

# 4. Restart PM2
echo "♻️  Reiniciando PM2..."
pm2 reload ecosystem.config.js --update-env

# 5. Save PM2 state
pm2 save

echo ""
echo "✅ Deploy completado"
pm2 status mercantia-landing
