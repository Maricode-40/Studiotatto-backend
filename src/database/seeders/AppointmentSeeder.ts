import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Appointment } from "../../models/Appointment";
import { Service } from "../../models/Service";
import { User } from "../../models/User";
import { AppointmentFactory } from "../factories/Appointment";
import { Seeder } from "./Seeder";

export class AppointmentSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const { APPOINTMENTS_PER_USER } = SeederConfig;

    const services = await Service.find();
    const users = await User.find();

    const appointments = new AppointmentFactory().createMany(
      APPOINTMENTS_PER_USER
    );
    appointments.forEach((appointment) => {
      appointment.service = getRandomValueFromArray(services);
      appointment.user = getRandomValueFromArray(users);
    });

    await Appointment.save(appointments);
  }
}
