import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from './agenda.json'
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvxwyz'
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra)
    } )
  }
}
