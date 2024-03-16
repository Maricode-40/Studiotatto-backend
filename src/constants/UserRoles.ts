import { Role } from "../models/Role";

export const UserRoles = {
  SUPERADMIN: { id: 1, name: "superadmin" } as Role,
  TATUADOR: { id: 2, name: "tatuador" } as Role,
  CLIENT: { id: 3, name: "client" } as Role,
};
