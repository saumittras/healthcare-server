-- AlterTable
ALTER TABLE "doctors" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "registrationNumber" DROP NOT NULL,
ALTER COLUMN "appoinmentFee" DROP NOT NULL,
ALTER COLUMN "qualification" DROP NOT NULL,
ALTER COLUMN "currentWorkingPlace" DROP NOT NULL;
