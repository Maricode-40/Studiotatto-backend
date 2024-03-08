import { faker } from "@faker-js/faker";
import { Appointment } from "../../models/Appointment";
import { Factory } from "./Factory";

export class AppointmentFactory extends Factory<Appointment> {
  protected generate(): Appointment {
    return {
      appointmentDate: faker.date.recent(),
    } as Appointment;
  }
}
