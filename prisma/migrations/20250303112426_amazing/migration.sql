/*
  Warnings:

  - You are about to drop the column `planId` on the `subscription` table. All the data in the column will be lost.
  - You are about to drop the column `porfilId` on the `subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subscription" DROP COLUMN "planId",
DROP COLUMN "porfilId";
