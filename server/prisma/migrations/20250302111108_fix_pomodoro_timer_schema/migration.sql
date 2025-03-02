/*
  Warnings:

  - You are about to drop the `pomodoro_round` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `current_round` to the `pomodoro_session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_working_time` to the `pomodoro_session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pomodoro_round" DROP CONSTRAINT "pomodoro_round_pomodoro_session_id_fkey";

-- AlterTable
ALTER TABLE "pomodoro_session" ADD COLUMN     "current_round" INTEGER NOT NULL,
ADD COLUMN     "is_working_time" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "pomodoro_round";
