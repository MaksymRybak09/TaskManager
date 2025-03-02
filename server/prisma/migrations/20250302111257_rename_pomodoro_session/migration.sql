/*
  Warnings:

  - You are about to drop the `pomodoro_session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pomodoro_session" DROP CONSTRAINT "pomodoro_session_user_id_fkey";

-- DropTable
DROP TABLE "pomodoro_session";

-- CreateTable
CREATE TABLE "pomodoro_timer" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "current_round" INTEGER NOT NULL,
    "is_working_time" BOOLEAN NOT NULL,
    "is_complited" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "pomodoro_timer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pomodoro_timer" ADD CONSTRAINT "pomodoro_timer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
