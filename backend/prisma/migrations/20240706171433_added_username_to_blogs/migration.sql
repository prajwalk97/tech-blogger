/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_authorId_fkey";

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "authorName" TEXT NOT NULL DEFAULT 'guest';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_name_key" ON "User"("id", "name");

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_authorName_fkey" FOREIGN KEY ("authorId", "authorName") REFERENCES "User"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
