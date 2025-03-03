/*
  Warnings:

  - You are about to drop the column `audioId` on the `audioTrack` table. All the data in the column will be lost.
  - You are about to drop the column `langId` on the `audioTrack` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "audioTrack" DROP COLUMN "audioId",
DROP COLUMN "langId";
