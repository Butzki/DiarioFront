import { Component, Input } from '@angular/core';
import { Registro } from './Registro';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-registro',
  standalone: true,
  imports: [DatePipe],
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