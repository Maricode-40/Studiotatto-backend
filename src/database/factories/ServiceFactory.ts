import { faker } from "@faker-js/faker";
import { Service } from "../../models/Service";
import { Factory } from "./Factory";

export class ServiceFactory extends Factory<Service> {
  protected generate(): Service {
    return {
      serviceName: faker.helpers.arrayElement([
        "Tatuador1 Tatuajes 1",
        "Tatuador2 Tatuajes 2",
        "Tatuador3 Tatuajes 3",
      ]),
      description: faker.lorem.sentence({ min: 2, max: 7 }),
    } as Service;
  }
}
