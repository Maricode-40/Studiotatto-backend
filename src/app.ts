import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import corsOptions from "./config/cors";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors(corsOptions));

export default app;
