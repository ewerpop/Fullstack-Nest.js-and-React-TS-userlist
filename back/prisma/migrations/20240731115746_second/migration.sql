/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT 'anonymous',
    "lastName" TEXT NOT NULL DEFAULT 'unknown',
    "age" INTEGER NOT NULL DEFAULT 30,
    "height" INTEGER NOT NULL DEFAULT 170,
    "place" TEXT NOT NULL DEFAULT 'Kazan',
    "weight" INTEGER NOT NULL DEFAULT 70,
    "sex" BOOLEAN NOT NULL DEFAULT true
);
