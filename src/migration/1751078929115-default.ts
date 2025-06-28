import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1751078929115 implements MigrationInterface {
    name = 'Default1751078929115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "FLIGHTS" ("FLI_ID" integer NOT NULL, "FLI_FLIGHT_NUMBER" character varying(5) NOT NULL, "FLI_AIRLINE" character varying(50) NOT NULL, "FLI_ORIGIN" character varying(3) NOT NULL, "FLI_DESTINATION" character varying(3) NOT NULL, "FLI_DEPARTURE" TIMESTAMP NOT NULL, "FLI_ARRIVAL" TIMESTAMP NOT NULL, "FLI_PRICE" numeric(10,2) NOT NULL, CONSTRAINT "PK_c18bdb92eb50bda288ec3dde21f" PRIMARY KEY ("FLI_ID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "FLIGHTS"`);
    }

}
