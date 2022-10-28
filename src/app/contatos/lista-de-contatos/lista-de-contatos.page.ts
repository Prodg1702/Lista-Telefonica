import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './lista-de-contatos.page.html',
  styleUrls: ['./lista-de-contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  public todosContatos : any

  constructor(
    private objDadosService : DadosService) { }

  ngOnInit() {
    this.todosContatos = this.objDadosService.EnviarTodosContatos() 
  }

}