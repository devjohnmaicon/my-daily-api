import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPasswordForEmployee1650246588738 implements MigrationInterface {
    name = 'AddPasswordForEmployee1650246588738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" ADD "password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "password"`);
    }

}
