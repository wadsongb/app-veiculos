import express from "express";
import { AppDataSource } from "./data-source";
import veiculoRoutes from "./routes/veiculo.routes"; // default import

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json()); // middleware para JSON
    app.use("/veiculos", veiculoRoutes); // todas as rotas prefixadas com /veiculos

    app.listen(3000, () => console.log("🚗 Servidor rodando na porta 3000"));
  })
  .catch(error => console.log("Erro ao inicializar banco:", error));
