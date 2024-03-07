import { RoleSeeder } from "./RoleSeeder";

(async () => {
  console.log("Starting seeder...");

  await new RoleSeeder().start();
})();
