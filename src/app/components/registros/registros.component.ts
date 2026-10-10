import { Component, OnInit } from '@angular/core';
import { CardRegistroComponent } from './card-registro/card-registro.component';
import { Registro } from './card-registro/Registro';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistroComponent, NgFor, FormsModule],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent implements OnInit {

  private readonly apiUrl = 'http://localhost:4200/api/registros';

  registrosOrigem: Registro[] = [];
  modalSolicitado: boolean = false;

  novoRegistro: Registro = this.criarRegistroVazio();

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<Registro[]>(this.apiUrl, { transferCache: false }).subscribe({
      next: (registros) => {
        this.registrosOrigem = registros;
      },
      error: (error) => {
        console.error('Erro ao buscar registros:', error);
      }
    });
  }

  adicionarRegistro(): void {
    const corpo = {
      ...this.novoRegistro,
      data: this.dataLocalAtual(),
      usuarioId: 1
    };

    this._http.post<Registro>(this.apiUrl, corpo).subscribe({
      next: (registro) => {
        this.registrosOrigem.push(registro);
        this.novoRegistro = this.criarRegistroVazio();
        this.modalSolicitado = false;
      },
      error: (error) => {
        console.error('Erro ao salvar registro:', error);
      }
    });
  }

  private criarRegistroVazio(): Registro {
    return {
      titulo: '',
      data: new Date(),
      conteudo: ''
    };
  }

  // Data/hora local (sem "Z"), para a validação "data atual" do back não
  // ser afetada pela conversão para UTC.
  private dataLocalAtual(): string {
    const agora = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())}` +
           `T${pad(agora.getHours())}:${pad(agora.getMinutes())}:${pad(agora.getSeconds())}`;
  }
}