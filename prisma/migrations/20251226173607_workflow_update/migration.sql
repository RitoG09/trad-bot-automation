-- Add updatedAt safely for existing rows
ALTER TABLE "Workflow"
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- Add userId as nullable (safe for existing rows)
ALTER TABLE "Workflow"
ADD COLUMN "userId" TEXT;


