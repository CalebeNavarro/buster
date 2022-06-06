import { MigrationInterface, QueryRunner } from "typeorm";

export class changeOTO1654538846748 implements MigrationInterface {
    name = 'changeOTO1654538846748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stock" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_092bc1fc7d860426a1dec5aa8e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "stockId" uuid, CONSTRAINT "REL_f81d90fc0d025b50a3bfcf7dba" UNIQUE ("stockId"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL, "paid" boolean NOT NULL, "total" double precision NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "money" double precision NOT NULL DEFAULT '0', "admin" boolean NOT NULL DEFAULT false, "cartId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_342497b574edb2309ec8c6b62a" UNIQUE ("cartId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_products_product" ("cartId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_785ab9c1dbede19ef42bf12280b" PRIMARY KEY ("cartId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e6ce39be5d354954a88ded1eba" ON "cart_products_product" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0fc996e42b6330c97f8cffbddf" ON "cart_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_f81d90fc0d025b50a3bfcf7dba7" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_342497b574edb2309ec8c6b62aa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_products_product" ADD CONSTRAINT "FK_e6ce39be5d354954a88ded1ebac" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_products_product" ADD CONSTRAINT "FK_0fc996e42b6330c97f8cffbddfa" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_products_product" DROP CONSTRAINT "FK_0fc996e42b6330c97f8cffbddfa"`);
        await queryRunner.query(`ALTER TABLE "cart_products_product" DROP CONSTRAINT "FK_e6ce39be5d354954a88ded1ebac"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_342497b574edb2309ec8c6b62aa"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_f81d90fc0d025b50a3bfcf7dba7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0fc996e42b6330c97f8cffbddf"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e6ce39be5d354954a88ded1eba"`);
        await queryRunner.query(`DROP TABLE "cart_products_product"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "stock"`);
    }

}
