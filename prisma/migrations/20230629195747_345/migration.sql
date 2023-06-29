/*
  Warnings:

  - The primary key for the `stock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_id` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `store_id` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the `brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sale` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sale_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `staff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `staff_details_view` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `store` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_pro2]` on the table `stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_pro2` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quan_pro` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_brand_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `sale_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `sale_staff_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `sale_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale_item` DROP FOREIGN KEY `sale_item_sale_id_fkey`;

-- DropForeignKey
ALTER TABLE `staff` DROP FOREIGN KEY `staff_store_id_fkey`;

-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `stock_store_id_fkey`;

-- AlterTable
ALTER TABLE `stock` DROP PRIMARY KEY,
    DROP COLUMN `product_id`,
    DROP COLUMN `quantity`,
    DROP COLUMN `store_id`,
    ADD COLUMN `id_pro2` INTEGER NOT NULL,
    ADD COLUMN `quan_pro` INTEGER NOT NULL;

-- DropTable
DROP TABLE `brand`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `customer`;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `sale`;

-- DropTable
DROP TABLE `sale_item`;

-- DropTable
DROP TABLE `staff`;

-- DropTable
DROP TABLE `staff_details_view`;

-- DropTable
DROP TABLE `store`;

-- CreateTable
CREATE TABLE `tienda` (
    `id_str` INTEGER NOT NULL,
    `nom_str` VARCHAR(191) NOT NULL,
    `tel_str` VARCHAR(191) NOT NULL,
    `email_str` VARCHAR(191) NOT NULL,
    `st_str` VARCHAR(191) NOT NULL,
    `cit_str` VARCHAR(191) NOT NULL,
    `stat_str` VARCHAR(191) NOT NULL,
    `cp_str` INTEGER NOT NULL,

    PRIMARY KEY (`id_str`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empleado` (
    `id_emp` INTEGER NOT NULL,
    `nom_emp` VARCHAR(191) NOT NULL,
    `ape_emp` VARCHAR(191) NOT NULL,
    `tel_emp` VARCHAR(191) NOT NULL,
    `email_emp` VARCHAR(191) NOT NULL,
    `sal_emp` INTEGER NOT NULL,
    `id_str2` INTEGER NOT NULL,

    PRIMARY KEY (`id_emp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `id_cli` INTEGER NOT NULL,
    `nom_cli` VARCHAR(191) NOT NULL,
    `ape_cli` VARCHAR(191) NOT NULL,
    `tel_cli` VARCHAR(191) NOT NULL,
    `email_cli` VARCHAR(191) NOT NULL,
    `dir_cli` VARCHAR(191) NOT NULL,
    `cp_cli` INTEGER NOT NULL,

    PRIMARY KEY (`id_cli`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `id_pro` INTEGER NOT NULL,
    `nom_pro` VARCHAR(191) NOT NULL,
    `pric_pro` INTEGER NOT NULL,

    PRIMARY KEY (`id_pro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `platillo` (
    `id_pla` INTEGER NOT NULL,
    `nom_pla` VARCHAR(191) NOT NULL,
    `pric_pla` INTEGER NOT NULL,

    PRIMARY KEY (`id_pla`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden` (
    `id_ord` INTEGER NOT NULL,
    `dat_ord` DATETIME(3) NOT NULL,
    `cant_ord` INTEGER NOT NULL,
    `id_cli1` INTEGER NOT NULL,
    `id_pla1` INTEGER NOT NULL,
    `id_emp1` INTEGER NOT NULL,
    `id_pro1` INTEGER NOT NULL,

    PRIMARY KEY (`id_ord`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `stock_id_pro2_key` ON `stock`(`id_pro2`);

-- AddForeignKey
ALTER TABLE `empleado` ADD CONSTRAINT `empleado_id_str2_fkey` FOREIGN KEY (`id_str2`) REFERENCES `tienda`(`id_str`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_id_pro2_fkey` FOREIGN KEY (`id_pro2`) REFERENCES `producto`(`id_pro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_cli1_fkey` FOREIGN KEY (`id_cli1`) REFERENCES `cliente`(`id_cli`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_pla1_fkey` FOREIGN KEY (`id_pla1`) REFERENCES `platillo`(`id_pla`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_emp1_fkey` FOREIGN KEY (`id_emp1`) REFERENCES `empleado`(`id_emp`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_pro1_fkey` FOREIGN KEY (`id_pro1`) REFERENCES `producto`(`id_pro`) ON DELETE RESTRICT ON UPDATE CASCADE;
