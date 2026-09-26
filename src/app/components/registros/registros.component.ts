import { Component } from '@angular/core';
import { CardRegistroComponent } from './card-registro/card-registro.component';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CardRegistroComponent],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {

}
