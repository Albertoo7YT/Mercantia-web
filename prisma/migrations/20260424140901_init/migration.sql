-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NUEVA', 'CONTACTADA', 'DEMO_AGENDADA', 'CONVERTIDA', 'PERDIDA');

-- CreateEnum
CREATE TYPE "ClientStatus" AS ENUM ('ACTIVO', 'EN_PRUEBA', 'PAUSADO', 'BAJA');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('AL_DIA', 'PENDIENTE', 'ATRASADO', 'SIN_FACTURA');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demo_leads" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT,
    "comerciales" TEXT,
    "sector" TEXT,
    "mensaje" TEXT,
    "status" "LeadStatus" NOT NULL DEFAULT 'NUEVA',
    "notas" TEXT,
    "proximoContacto" TIMESTAMP(3),
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "landingPath" TEXT,
    "clientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "demo_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "call_leads" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "mejorMomento" TEXT,
    "mensaje" TEXT,
    "status" "LeadStatus" NOT NULL DEFAULT 'NUEVA',
    "notas" TEXT,
    "proximoContacto" TIMESTAMP(3),
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "landingPath" TEXT,
    "clientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "call_leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lead_activities" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "demoLeadId" TEXT,
    "callLeadId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,

    CONSTRAINT "lead_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "contactoNombre" TEXT NOT NULL,
    "contactoEmail" TEXT NOT NULL,
    "contactoTelefono" TEXT,
    "cif" TEXT,
    "direccion" TEXT,
    "sector" TEXT,
    "plan" TEXT NOT NULL DEFAULT 'STARTER',
    "comerciales" INTEGER,
    "erp" TEXT,
    "mrr" DOUBLE PRECISION,
    "status" "ClientStatus" NOT NULL DEFAULT 'ACTIVO',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'SIN_FACTURA',
    "fechaAlta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaBaja" TIMESTAMP(3),
    "notas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_views" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmContent" TEXT,
    "utmTerm" TEXT,
    "country" TEXT,
    "device" TEXT,
    "browser" TEXT,
    "userAgent" TEXT,
    "ipHash" TEXT,
    "sessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "page_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "email_templates" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "email_templates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE INDEX "demo_leads_status_idx" ON "demo_leads"("status");

-- CreateIndex
CREATE INDEX "demo_leads_createdAt_idx" ON "demo_leads"("createdAt");

-- CreateIndex
CREATE INDEX "call_leads_status_idx" ON "call_leads"("status");

-- CreateIndex
CREATE INDEX "call_leads_createdAt_idx" ON "call_leads"("createdAt");

-- CreateIndex
CREATE INDEX "lead_activities_createdAt_idx" ON "lead_activities"("createdAt");

-- CreateIndex
CREATE INDEX "clients_status_idx" ON "clients"("status");

-- CreateIndex
CREATE INDEX "page_views_createdAt_idx" ON "page_views"("createdAt");

-- CreateIndex
CREATE INDEX "page_views_path_idx" ON "page_views"("path");

-- CreateIndex
CREATE INDEX "page_views_sessionId_idx" ON "page_views"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "email_templates_slug_key" ON "email_templates"("slug");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "admin_users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "demo_leads" ADD CONSTRAINT "demo_leads_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "call_leads" ADD CONSTRAINT "call_leads_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead_activities" ADD CONSTRAINT "lead_activities_demoLeadId_fkey" FOREIGN KEY ("demoLeadId") REFERENCES "demo_leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead_activities" ADD CONSTRAINT "lead_activities_callLeadId_fkey" FOREIGN KEY ("callLeadId") REFERENCES "call_leads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
