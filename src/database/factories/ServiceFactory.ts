import { faker } from "@faker-js/faker";
import { Service } from "../../models/Service";
import { Factory } from "./Factory";

export class ServiceFactory extends Factory<Service> {
  protected generate(): Service {
    return {
      serviceName: faker.helpers.arrayElement([
        "Tatuador1",
        "Tatuador2",
        "Tatuador3",
      ]),
      description: faker.lorem.sentence({ min: 3, max: 10 }),
    } as Service;
  }
}
