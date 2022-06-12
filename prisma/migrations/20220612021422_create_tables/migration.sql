/*
  Warnings:

  - You are about to drop the column `permisson` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "permisson",
ADD COLUMN     "permission" BOOLEAN DEFAULT false;
