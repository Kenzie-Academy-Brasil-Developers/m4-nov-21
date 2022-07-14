import { MigrationInterface, QueryRunner } from "typeorm";

export class tokensUser1657804455337 implements MigrationInterface {
    name = 'tokensUser1657804455337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "horario_visita"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "token_ativacao" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "token_reset_password" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "token_reset_password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "token_ativacao"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "horario_visita" TIMESTAMP NOT NULL`);
    }

}
