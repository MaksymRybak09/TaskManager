/*
  Warnings:

  - You are about to drop the column `interval_is_count` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "interval_is_count",
ADD COLUMN     "intervals_count" INTEGER DEFAULT 7;
