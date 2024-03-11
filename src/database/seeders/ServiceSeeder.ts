import { SeederConfig } from "../../config/seeders";
import { ServiceFactory } from "../factories/ServiceFactory";
import { Seeder } from "./Seeder";
import { Service } from "../../models/Service";

export class ServiceSeeder extends Seeder {
  protected async generate(): Promise<void> {
    const { SERVICES } = SeederConfig;

    const services = new ServiceFactory().createMany(SERVICES);
    await Service.save(services);
  }
}
