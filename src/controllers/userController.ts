import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { UserRoles } from "../constants/UserRoles";
import { Role } from "../models/Role";

export const userController = {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { firstName, lastName, email, password, isActive } = req.body;

      if (!firstName || !lastName || !email || !password || !isActive) {
        res.status(400).json({
          message: "All fields must be provided",
        });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const userToCreate = User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        isActive: isActive,
        role: UserRoles.CLIENT,
      });

      // Guardar en la base de datos
      await User.save(userToCreate);

      res.status(201).json({
        message: "User has been created",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to create user",
      });
    }
  },

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const page = Number(req.query.page) || 3;
      const limit = Number(req.query.limit) || 10;

      const [users, totalUsers] = await User.findAndCount({
        relations: {
          role: true,
        },
        select: {
          role: {
            name: true,
          },
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      if (totalUsers === 0) {
        res.status(404).json({ message: "Users not found" });
        return;
      }

      const totalPages = Math.ceil(totalUsers / limit);

      res.status(200).json({
        users: users,
        current_page: page,
        per_page: limit,
        total_pages: totalPages,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve users",
      });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const userId = Number(req.params.id);

      const user = await User.findOne({
        relations: {
          role: true,
        },
        where: { id: userId },
      });

      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve user",
      });
    }
  },

  async update(
    req: Request<{ id: string }, {}, Partial<User>, {}>,
    res: Response
  ): Promise<void> {
    //para tipar el Request<Params, Response, Body, Query>,
    try {
      const userId = Number(req.params.id);

      const { password, role, ...resUserData } = req.body;

      const userToUpdate = await User.findOne({
        where: { id: userId },
      });
      if (!userToUpdate) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      if (password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        userToUpdate.password = hashedPassword;
      }

      const updatedUser: Partial<User> = {
        ...userToUpdate,
        ...resUserData,
      };

      await User.save(updatedUser);

      res.status(202).json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Failed to update user",
      });
    }
  },

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const userId = Number(req.params.id);

      const userToDelete = await User.delete(userId);

      if (userToDelete.affected === 0) {
        res.status(404).json({ message: "User NOT Found" });
        return;
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete the user by id" });
    }
  },

  //este ya  es fuera del crud
  async getUserAppointmentsbyId(req: Request, res: Response): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const getUserAppointmentsbyId = await User.findOne({
        relations: {
          role: true,
          appointments: true,
        },
        where: { id: userId },
      });

      res.json(getUserAppointmentsbyId);
    } catch (error) {
      res.status(500).json({
        message: "Failed we couldnt get the  users appointments by id",
      });
    }
  },

  async updateRolebyId(req: Request, res: Response): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const roleId = req.body.roleId;

      const updateRolebyId = await User.findOne({
        where: {
          id: userId,
        },
      });

      if (!updateRolebyId) {
        res.status(404).json({ message: "user role not found" });
        return;
      }
      const roleToUpdate = await Role.findOne({
        where: {
          id: roleId,
        },
      });

      if (!roleToUpdate) {
        res.status(404).json({ message: "invalid role id" });
        return;
      }

      updateRolebyId.role = roleToUpdate;
      await User.save(roleToUpdate);

      res.status(202).json({ message: "role updated succesfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to update the role by id" });
    }
  },
};
