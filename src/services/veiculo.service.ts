import { Veiculo } from "../entities/veiculo.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

export class VeiculoService {
  private repo: Repository<Veiculo>;

  constructor() {
    this.repo = AppDataSource.getRepository(Veiculo);
  }

  // Criar veículo
  async criar(dados: Partial<Veiculo>) {
    const novo = this.repo.create(dados);
    return await this.repo.save(novo);
  }

  // Listar todos
  async listar(): Promise<Veiculo[]> {
    return await this.repo.find();
  }

  // Buscar por placa
  async buscarPorPlaca(placa: string): Promise<Veiculo | null> {
    return await this.repo.findOne({ where: { placa } });
  }

  // Buscar por ID
  async buscaPorId(id: number): Promise<Veiculo | null> {
    return await this.repo.findOne({ where: { id } });
  }

  // Atualizar veículo
  async atualizar(id: number, dados: Partial<Veiculo>): Promise<Veiculo | null> {
    const veiculo = await this.repo.findOne({ where: { id } });
    if (!veiculo) return null;

    Object.assign(veiculo, dados);
    return await this.repo.save(veiculo);
  }

  // Remover veículo
  async remover(id: number): Promise<boolean> {
    const veiculo = await this.repo.findOne({ where: { id } });
    if (!veiculo) return false;

    await this.repo.remove(veiculo);
    return true;
  }
}
