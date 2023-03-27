/*
  Warnings:

  - You are about to drop the column `When` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userAcost` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userBcost` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Splitbill" ADD COLUMN     "userCid" TEXT,
ADD COLUMN     "userCname" TEXT,
ADD COLUMN     "userDid" TEXT,
ADD COLUMN     "userDname" TEXT,
ADD COLUMN     "userEid" TEXT,
ADD COLUMN     "userEname" TEXT;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "When",
ADD COLUMN     "date" TEXT,
ADD COLUMN     "userAcost" TEXT NOT NULL,
ADD COLUMN     "userBcost" TEXT NOT NULL,
ADD COLUMN     "userCcost" TEXT,
ADD COLUMN     "userDcost" TEXT,
ADD COLUMN     "userEcost" TEXT;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";
