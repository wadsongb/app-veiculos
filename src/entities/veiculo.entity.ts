// src/entities/veiculo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("veiculos")
export class Veiculo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  modelo!: string;

  @Column()
  ano!: number;

  @Column({ unique: true })
  placa!: string;

  @Column()
  cor!: string;

  exibir(): string {
    return `${this.modelo} / (${this.ano}) - Placa: ${this.placa} - Cor ${this.cor}`;
  }
}
