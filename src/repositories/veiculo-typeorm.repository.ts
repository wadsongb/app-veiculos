// src/repositories/veiculo-typeorm.repository.ts
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Veiculo } from "../entities/veiculo.entity";
import { IVeiculoRepository } from "../interfaces/veiculo-repository.interface";

export class VeiculoTypeORMRepository implements IVeiculoRepository {
  private ormRepository: Repository<Veiculo>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Veiculo);
  }

  async salvar(veiculo: Veiculo): Promise<void> {
    await this.ormRepository.save(veiculo);
  }

  async listar(): Promise<Veiculo[]> {
    return this.ormRepository.find();
  }

  async buscarPorPlaca(placa: string): Promise<Veiculo | null> {
    return await this.ormRepository.findOne({ where: { placa } });
  }

  async buscarPorId(id: number): Promise<Veiculo | null> {
    return await this.ormRepository.findOne({ where: { id } });
  }

  async remover(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
