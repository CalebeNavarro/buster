import { MigrationInterface, QueryRunner } from "typeorm";

export class userMoney1654196150242 implements MigrationInterface {
    name = 'userMoney1654196150242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "money" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "money" DROP DEFAULT`);
    }

}
