import { Component, Input } from '@angular/core';
import { Registro } from './Registro';

@Component({
  selector: 'app-card-registro',
  standalone: true,
  imports: [],
  templateUrl: './card-registro.component.html',
  styleUrl: './card-registro.component.css'
})
export class CardRegistroComponent {
    @Input()
  registroDestino: Registro = {
    titulo: '',
    data: new Date('2026-09-25'),
    conteudo: ''
  };
}