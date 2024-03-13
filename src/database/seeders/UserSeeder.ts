import { SeederConfig } from "../../config/seeders";
import { UserRoles } from "../../constants/UserRoles";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeder";

export class UserSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const { SUPERADMIN, TATUADOR, CLIENTS } = SeederConfig;

    const userFactory = new UserFactory();

    const superadminUsers = userFactory.createMany(SUPERADMIN);
    superadminUsers.forEach((user, i) => {
      user.role = UserRoles.SUPERADMIN;
      user.email = `superadmin${i + 1}@superadmin.com`;
    });

    const tatuadorUsers = userFactory.createMany(TATUADOR);
    tatuadorUsers.forEach((user, i) => {
      user.role = UserRoles.TATUADOR;
      user.email = `tatuador${i + 1}@tatuador.com`;
    });

    const clientUsers = userFactory.createMany(CLIENTS);
    clientUsers.forEach((user) => {
      user.role = UserRoles.CLIENT;
    });

    const allUsers = [...superadminUsers, ...tatuadorUsers, ...clientUsers];
    await User.save(allUsers);
  }
}
