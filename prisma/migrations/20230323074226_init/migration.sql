-- CreateTable
CREATE TABLE "Splitbill" (
    "id" SERIAL NOT NULL,
    "contractId" TEXT NOT NULL,
    "contractName" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "userAname" TEXT NOT NULL,
    "userAid" TEXT NOT NULL,
    "userBname" TEXT NOT NULL,
    "userBid" TEXT NOT NULL,

    CONSTRAINT "Splitbill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "contractId" TEXT,
    "whoPaid" TEXT NOT NULL,
    "forWhat" TEXT NOT NULL,
    "When" TEXT,
    "divideCost" TEXT[],

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Splitbill_contractId_key" ON "Splitbill"("contractId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Splitbill"("contractId") ON DELETE SET NULL ON UPDATE CASCADE;
