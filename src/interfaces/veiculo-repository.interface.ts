// src/interfaces/veiculo-repository.interface.ts
import { Veiculo } from "../entities/veiculo.entity";

export interface IVeiculoRepository {
  salvar(veiculo: Veiculo): Promise<void>;
  listar(): Promise<Veiculo[]>;
  buscarPorPlaca(placa: string): Promise<Veiculo | null>;
  buscarPorId(id: number): Promise<Veiculo | null>;
  remover(id: number): Promise<void>;
}
