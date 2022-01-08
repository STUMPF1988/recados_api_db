import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableRecado1641432028137 implements MigrationInterface {
    name = 'CreateTableRecado1641432028137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recado" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "descricao" character varying NOT NULL, "detalhamento" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c89e69d031bceb9ab96920de667" PRIMARY KEY ("uid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "recado"`);
    }

}
