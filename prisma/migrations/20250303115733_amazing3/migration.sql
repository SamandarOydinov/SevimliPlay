/*
  Warnings:

  - You are about to drop the column `categoryId` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `parentCategoryId` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "categoryId",
DROP COLUMN "parentCategoryId";
