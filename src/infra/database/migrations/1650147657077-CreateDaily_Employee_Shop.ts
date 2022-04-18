import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDailyEmployeeShop1650147657077 implements MigrationInterface {
    name = 'CreateDailyEmployeeShop1650147657077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employees" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "balance" character varying NOT NULL,"password" character varying NOT NULL, "profile_photo" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dailies" ("id" character varying NOT NULL, "type" character varying NOT NULL, "value" integer NOT NULL, "date" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_21609e535a0eab62efb13e82885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shops" ("id" character varying NOT NULL, "name" character varying NOT NULL, "phone" character varying(20) NOT NULL, "city" character varying NOT NULL, "profile_photo" character varying , "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3c6aaa6607d287de99815e60b96" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shops"`);
        await queryRunner.query(`DROP TABLE "dailies"`);
        await queryRunner.query(`DROP TABLE "employees"`);
    }

}
