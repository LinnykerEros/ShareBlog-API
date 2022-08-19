/*
  Warnings:

  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password_hash` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `profession` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password_hash" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "profession" SET NOT NULL;
