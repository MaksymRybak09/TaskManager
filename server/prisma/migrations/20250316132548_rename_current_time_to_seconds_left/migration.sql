/*
  Warnings:

  - You are about to drop the column `current_time` on the `pomodoro_timer` table. All the data in the column will be lost.
  - Added the required column `seconds_left` to the `pomodoro_timer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pomodoro_timer" DROP COLUMN "current_time",
ADD COLUMN     "seconds_left" INTEGER NOT NULL;
