import express, { Application } from "express";
import cors from "cors";
import corsOptions from "./config/cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/api.routes";

dotenv.config();

const app: Application = express();

//middleware
app.use(express.json());
app.use(cors(corsOptions));

//register api routes
app.use("/api", apiRoutes);

export default app;
