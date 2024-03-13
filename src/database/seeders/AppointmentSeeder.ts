import { SeederConfig } from "../../config/seeders";
import { getRandomValueFromArray } from "../../helpers/common";
import { Appointment } from "../../models/Appointment";
import { Service } from "../../models/Service";
import { User } from "../../models/User";
import { Seeder } from "./Seeder";

export class AppointmentSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const { APPOINTMENTS_PER_USER } = SeederConfig;

    const services = await Service.find();
    const users = await User.find();

    const appointments: Partial<Appointment>[] = [
      { appointmentDate: new Date("2024-10-15") },
      { appointmentDate: new Date("2024-10-16") },
      { appointmentDate: new Date("2024-10-17") },
      { appointmentDate: new Date("2024-10-18") },
      { appointmentDate: new Date("2024-10-19") },
      { appointmentDate: new Date("2024-10-20") },
    ];

    appointments.forEach((appointment) => {
      appointment.service = getRandomValueFromArray(services);
      appointment.user = getRandomValueFromArray(users);
    });

    await Appointment.save(appointments);
  }
}
