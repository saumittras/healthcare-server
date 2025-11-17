/*
  Warnings:

  - Made the column `contactNumber` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `registrationNumber` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `qualification` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `currentWorkingPlace` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `appointmentFee` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `designation` on table `doctors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `doctors` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "contactNumber" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "registrationNumber" SET NOT NULL,
ALTER COLUMN "qualification" SET NOT NULL,
ALTER COLUMN "currentWorkingPlace" SET NOT NULL,
ALTER COLUMN "appointmentFee" SET NOT NULL,
ALTER COLUMN "designation" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL;
