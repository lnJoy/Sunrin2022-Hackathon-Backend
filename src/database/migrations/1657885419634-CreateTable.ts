import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1657885419634 implements MigrationInterface {
    name = 'CreateTable1657885419634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP CONSTRAINT "FK_24e8376d0e2c371c95423c131ff"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "distinction"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "contents"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "breeds"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "missingAddress"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "missingDate"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP CONSTRAINT "UQ_24e8376d0e2c371c95423c131ff"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "locationId"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "locationId" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD CONSTRAINT "UQ_24e8376d0e2c371c95423c131ff" UNIQUE ("locationId")`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "distinction" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "contents" text`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "breeds" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "gender" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "age" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "missingAddress" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "missingDate" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD CONSTRAINT "FK_24e8376d0e2c371c95423c131ff" FOREIGN KEY ("locationId") REFERENCES "location_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP CONSTRAINT "FK_24e8376d0e2c371c95423c131ff"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "missingDate"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "missingAddress"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "breeds"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "contents"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "distinction"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP CONSTRAINT "UQ_24e8376d0e2c371c95423c131ff"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" DROP COLUMN "locationId"`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "locationId" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD CONSTRAINT "UQ_24e8376d0e2c371c95423c131ff" UNIQUE ("locationId")`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "missingDate" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "missingAddress" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "age" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "gender" integer`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "breeds" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "contents" text`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD "distinction" character varying`);
        await queryRunner.query(`ALTER TABLE "road_cat_post" ADD CONSTRAINT "FK_24e8376d0e2c371c95423c131ff" FOREIGN KEY ("locationId") REFERENCES "location_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
