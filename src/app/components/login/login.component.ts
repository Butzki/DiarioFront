import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Token } from '@angular/compiler';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nome = '';
  senha = '';

  constructor(private autenticacaoService: AutenticacaoService) { 

  }

  autenticar() {
    this.autenticacaoService.login(this.nome).subscribe(
      (token: string) => {
        this.autenticacaoService.salvarToken(token);
        console.log('Token salvo com sucesso:', token);
      },
      (error) => {
        console.error('Erro ao autenticar:', error);
      }
    )
  }
}
