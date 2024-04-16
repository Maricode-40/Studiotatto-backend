import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";

export const appointmentController = {
  //Create appointments

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { appointmentDate, userId, serviceId } = req.body;

      if (!appointmentDate || !userId || !serviceId) {
        res.status(400).json({
          message: "All fields must be provided",
        });
        return;
      }

      const appointmentToCreate = Appointment.create({
        appointmentDate: appointmentDate,
        userId: userId,
        serviceId: serviceId,
      });

      // Save to BD
      await Appointment.save(appointmentToCreate);

      res.status(201).json({
        message: "appointment has been created",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to create date",
      });
    }
  },

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 250;

      const [appointments, totalAppointments] = await Appointment.findAndCount({
        select: {
          id: true,
          appointmentDate: true,
          userId: true,
          serviceId: true,
        },
      });
      if (Appointment.length === 0) {
        res.status(404).json({
          message: "Dates not found",
        });
        return;
      }

      const totalPages = Math.ceil(totalAppointments / limit);

      res.status(200).json({
        dates: appointments,
        current_page: page,
        per_page: limit,
        total_pages: totalPages,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  },

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const dateId = Number(req.params.id);

      const appointments = await Appointment.findOne({
        where: { id: dateId },
      });

      if (!appointments) {
        res.status(404).json({ message: "Date not found" });
        return;
      }

      res.json(appointments);
    } catch (error) {
      res.status(500).json({
        message: "Failed to retrieve Date",
      });
    }
  },

  async update(
    req: Request<{ id: string }, {}, Partial<Date>>,
    res: Response
  ): Promise<void> {
    try {
      const dateId = Number(req.params.id);
      const { ...resDatesData } = req.body;

      const appointmentToUpdate = await Appointment.findOne({
        where: { id: dateId },
      });
      if (!appointmentToUpdate) {
        res.status(404).json({ message: "appointment not found" });
        return;
      }
      console.log(appointmentToUpdate);

      const updatedDate: Partial<Date> = {
        ...appointmentToUpdate,
        ...resDatesData,
      };

      await Appointment.save(appointmentToUpdate);

      res.status(202).json({
        message: "Appointment has been updated",
      });
    } catch (error) {
      res.status(500).json({
        message: "Appointment not found",
      });
    }
  },

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const DateId = Number(req.params.id);

      const deleteResult = await Appointment.delete(DateId);

      if (deleteResult.affected === 0) {
        res.status(404).json({ message: "Date not delete" });
        return;
      }

      res.status(200).json({
        message: "Date deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to delete date",
      });
    }
  },
};
