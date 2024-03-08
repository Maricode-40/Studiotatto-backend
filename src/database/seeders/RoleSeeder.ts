import { Role } from "../../models/Role";
import { Seeder } from "./Seeder";

export class RoleSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const roles: Partial<Role>[] = [
      { id: 1, name: "superadmin" },
      { id: 2, name: "tatuador" },
      { id: 3, name: "user" },
    ];

    await Role.save(roles);
  }
}
