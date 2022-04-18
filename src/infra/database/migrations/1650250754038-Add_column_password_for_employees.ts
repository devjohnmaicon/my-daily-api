import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnPasswordForEmployees1650250754038 implements MigrationInterface {
    name = 'AddColumnPasswordForEmployees1650250754038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "roles" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
