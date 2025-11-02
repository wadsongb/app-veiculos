import { Request, Response } from "express";
import { VeiculoService } from "../services/veiculo.service";

export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  // Criar veículo
  criar = async (req: Request, res: Response) => {
    try {
      const veiculoData = req.body;
      const veiculo = await this.veiculoService.criar(veiculoData);
      return res.status(201).json(veiculo);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Listar todos os veículos
  listar = async (_req: Request, res: Response) => {
    try {
      const veiculos = await this.veiculoService.listar();
      return res.json(veiculos);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Buscar veículo por ID
  buscarPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      const veiculo = await this.veiculoService.buscaPorId(id);
      if (!veiculo) {
        return res.status(404).json({ message: "Veículo não encontrado" });
      }

      return res.json(veiculo);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Buscar veículo por placa
  buscarPorPlaca = async (req: Request, res: Response) => {
    try {
      const placa = req.params.placa;
      if (!placa) {
        return res.status(400).json({ message: "Placa inválida" });
      }

      const veiculo = await this.veiculoService.buscarPorPlaca(placa);
      if (!veiculo) {
        return res.status(404).json({ message: "Veículo não encontrado" });
      }

      return res.json(veiculo);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Listar veículos formatados (todos)
  listarFormatado = async (_req: Request, res: Response) => {
    try {
      const veiculos = await this.veiculoService.listar();
      const formatados = veiculos.map(v => v.exibir());
      return res.json(formatados);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Listar veículo formatado por ID
  listarFormatadoPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      const veiculo = await this.veiculoService.buscaPorId(id);
      if (!veiculo) {
        return res.status(404).json({ message: "Veículo não encontrado" });
      }

      return res.json(veiculo.exibir());
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Atualizar veículo por ID
  atualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      const veiculoAtualizado = await this.veiculoService.atualizar(id, req.body);
      if (!veiculoAtualizado) {
        return res.status(404).json({ message: "Veículo não encontrado" });
      }

      return res.json(veiculoAtualizado);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  // Remover veículo por ID
  remover = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      const removido = await this.veiculoService.remover(id);
      if (!removido) {
        return res.status(404).json({ message: "Veículo não encontrado" });
      }

      return res.json({ message: "Veículo removido com sucesso" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };
}
