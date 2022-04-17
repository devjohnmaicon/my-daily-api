import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationsShopEmployeeEmployeeDailyEmployeeRoleShopRole1650153706803 implements MigrationInterface {
    name = 'RelationsShopEmployeeEmployeeDailyEmployeeRoleShopRole1650153706803'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "shops" ADD "roleId" integer`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "roleId" integer`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "shopId" character varying`);
        await queryRunner.query(`ALTER TABLE "dailies" ADD "employeeId" character varying`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dailies" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shops" ADD CONSTRAINT "FK_326cd7036cde8e628d5b6749d56" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_24d98872eb52c3edb30ce96c1e9" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_9cb03e9df5b6c71b181d79720c2" FOREIGN KEY ("shopId") REFERENCES "shops"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dailies" ADD CONSTRAINT "FK_8c9a542a71e54cd1d43f4dda2ab" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dailies" DROP CONSTRAINT "FK_8c9a542a71e54cd1d43f4dda2ab"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_9cb03e9df5b6c71b181d79720c2"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_24d98872eb52c3edb30ce96c1e9"`);
        await queryRunner.query(`ALTER TABLE "shops" DROP CONSTRAINT "FK_326cd7036cde8e628d5b6749d56"`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dailies" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employees" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shops" ALTER COLUMN "profile_photo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dailies" DROP COLUMN "employeeId"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "shopId"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "shops" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
