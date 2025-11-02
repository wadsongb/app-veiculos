// src/app.ts
import express from "express";
import { veiculoRoutes } from "./routes/veiculo.routes";

export const app = express();

app.use(express.json());
app.use("/veiculos", veiculoRoutes);
