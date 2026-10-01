import { Component } from '@angular/core';
import { CardRegistroComponent } from './card-registro/card-registro.component';
import { Registro } from './card-registro/Registro';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistroComponent, NgFor],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  registrosOrigem: Registro[] = [
    {
      titulo: 'Título do registro',
      data: new Date('2026-09-25'),
      conteudo: 'Conteúdo do registro...'
    },
    {
      titulo: 'Título do registro',
      data: new Date('2026-09-25'),
      conteudo: 'Conteúdo do registro...'
    },
    {
      titulo: 'Título do registro',
      data: new Date('2026-09-25'),
      conteudo: 'Conteúdo do registro...'
    },
    {
      titulo: 'Título do registro',
      data: new Date('2026-09-25'),
      conteudo: 'Conteúdo do registro...'
    },
    {
      titulo: 'Título do registro',
      data: new Date('2026-09-25'),
      conteudo: 'Conteúdo do registro...'
    }
  ];
}