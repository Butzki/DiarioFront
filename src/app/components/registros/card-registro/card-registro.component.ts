import { Component } from '@angular/core';
import { Registro } from './Registro';

@Component({
  selector: 'app-card-registro',
  standalone: true,
  imports: [],
  templateUrl: './card-registro.component.html',
  styleUrl: './card-registro.component.css'
})
export class CardRegistroComponent {
  registro: Registro = {
    titulo: 'Título do registro',
    data: new Date('2026-09-25'),
    conteudo: 'Conteúdo do registro...'
  };
}
