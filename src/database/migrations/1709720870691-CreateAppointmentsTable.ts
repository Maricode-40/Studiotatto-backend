import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";
import { Appointment } from "../../models/Appointment";

export class CreateAppointmentsTable1709720870691
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "appointment_date",
            type: "datetime",
          },
          {
            name: "user_id",
            type: "int",
          },
          {
            name: "service_id",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
          },
          {
            columnNames: ["service_id"],
            referencedTableName: "services",
            referencedColumnNames: ["id"],
          },
        ],
        uniques: [
          new TableUnique({
            name: "user_service_date_unique",
            columnNames: ["user_id", "service_id", "appointment_date"],
          }),
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointments");
  }
}
