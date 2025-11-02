import { Router } from "express";
import { VeiculoController } from "../controllers/veiculo.controller";
import { VeiculoService } from "../services/veiculo.service";

const router = Router();
const service = new VeiculoService();
const controller = new VeiculoController(service);

// Rotas de listagem formatada
router.get("/formatado", (req, res) => controller.listarFormatado(req, res));
router.get("/:id/formatado", (req, res) => controller.listarFormatadoPorId(req, res));

// Rotas CRUD
router.post("/", (req, res) => controller.criar(req, res));
router.get("/", (req, res) => controller.listar(req, res));
router.get("/placa/:placa", (req, res) => controller.buscarPorPlaca(req, res));
router.get("/:id", (req, res) => controller.buscarPorId(req, res));
router.put("/:id", (req, res) => controller.atualizar(req, res));
router.delete("/:id", (req, res) => controller.remover(req, res));

export default router; // export default
