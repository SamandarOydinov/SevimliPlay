-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "is_user" BOOLEAN NOT NULL DEFAULT true;
