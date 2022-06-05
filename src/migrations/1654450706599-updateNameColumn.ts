import { MigrationInterface, QueryRunner } from "typeorm";

export class updateNameColumn1654450706599 implements MigrationInterface {
    name = 'updateNameColumn1654450706599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "quatity" TO "quantity"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "quantity" TO "quatity"`);
    }

}
