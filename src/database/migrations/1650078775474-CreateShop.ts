import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShop1650078775474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'shops',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                },
                {
                  name: 'name',
                  type: 'varchar',
                  length: '150',
                  isNullable: false,
                },
      
                {
                  name: 'phone',
                  type: 'varchar',
                  length: '20',
                  isNullable: true,
                },
      
                {
                  name: 'city',
                  type: 'varchar',
                  length: '50',
                  isNullable: true,
                },
                {
                  name: 'profile_photo',
                  type: 'varchar',
                  length: '100',
                  isNullable: false,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
await queryRunner.dropTable('shops')
    }

}
