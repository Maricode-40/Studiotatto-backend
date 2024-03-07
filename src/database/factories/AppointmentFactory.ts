import { Factory } from "./Factory";
import { Appointment } from "../../models/Appointment";
import { faker } from "@faker-js/faker";

export class AppointmentFactory extends Factory<Appointment> {
  protected generate(): Appointment {
    return {
        appointmentDate: faker.date.recent(),
    } as unknown as Appointment;
  }
}

