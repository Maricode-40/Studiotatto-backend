import { AppointmentSeeder } from "./AppointmentSeeder";
import { RoleSeeder } from "./RoleSeeder";
import { ServiceSeeder } from "./ServiceSeeder";
import { UserSeeder } from "./UserSeeder";

(async () => {
  console.log("Starting seeder...");

  await new RoleSeeder().start();
  await new ServiceSeeder().start();
  await new AppointmentSeeder().start();
  await new UserSeeder().start();
})();
