import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";
import { Appointment } from "./Appointment";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "last_name" })
  lastName!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password", select: false })
  password!: string;

  @Column({ name: "is_active" })
  isActive!: boolean;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Role;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments?: Appointment[];
}
