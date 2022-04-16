import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationShopEmployee1650147940282 implements MigrationInterface {
    name = 'RelationShopEmployee1650147940282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" ADD "shopId" character varying`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dailies" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_9cb03e9df5b6c71b181d79720c2" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_9cb03e9df5b6c71b181d79720c2"`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dailies" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "shopId"`);
    }

}
