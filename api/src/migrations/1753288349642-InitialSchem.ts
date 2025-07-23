import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchem1753288349642 implements MigrationInterface {
    name = 'InitialSchem1753288349642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "premieres" ("id" SERIAL NOT NULL, "img" text NOT NULL, "date" text NOT NULL, "age" text NOT NULL, "title" text NOT NULL, "about" text NOT NULL, CONSTRAINT "PK_cbda323ef263ed68577dfae6d34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "img" text NOT NULL, "title" text NOT NULL, "date" text NOT NULL, "about" text NOT NULL, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "img" text NOT NULL, "title" text NOT NULL, "type" text NOT NULL, "time" text NOT NULL, "age" text NOT NULL, "about" text array NOT NULL, "actors" text array NOT NULL, "directors" text array NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bab6cf3a1e33e6790e9b9bd7d1" ON "events" ("title") `);
        await queryRunner.query(`CREATE INDEX "IDX_5c751ba5c02239663b81996563" ON "events" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_5c751ba5c02239663b81996563"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bab6cf3a1e33e6790e9b9bd7d1"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TABLE "news"`);
        await queryRunner.query(`DROP TABLE "premieres"`);
    }

}
