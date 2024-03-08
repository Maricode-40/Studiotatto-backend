import { SeederConfig } from "../../config/seeders";
import { UserRoles } from "../../constants/UserRoles";
import { User } from "../../models/User";
import { UserFactory } from "../factories/UserFactory";
import { Seeder } from "./Seeder";

export class UserSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const { SUPERADMIN, TATUADOR, CLIENT } = SeederConfig;

    const userFactory = new UserFactory();

    const adminUsers = userFactory.createMany(SUPERADMIN);
    adminUsers.forEach((user) => {
      user.role = UserRoles.SUPERADMIN;
    });

    const tatuadorUsers = userFactory.createMany(TATUADOR);
    tatuadorUsers.forEach((user) => {
      user.role = UserRoles.TATUADOR;
    });

    const clientUsers = userFactory.createMany(CLIENT);
    clientUsers.forEach((user) => {
      user.role = UserRoles.CLIENT;
    });

    const allUsers = [...adminUsers, ...tatuadorUsers, ...clientUsers];
    await User.save(allUsers);
  }
}
