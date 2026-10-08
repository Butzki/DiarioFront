import { Component } from '@angular/core';
import { CardRegistroComponent } from './card-registro/card-registro.component';
import { Registro } from './card-registro/Registro';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistroComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  registrosOrigem: Registro[] = []

  constructor(private _http: HttpClient) {

  }

  ngOnInit(): void {
    this._http.get<Registro[]>('http://localhost:4200/api/registros',
      {
        transferCache: false
      }
    ).subscribe({
      next: (registros) => {
        this.registrosOrigem = registros;
      },
      error: (error) => {
        console.error('Erro ao buscar registros:', error);
      }
    });
  }
}