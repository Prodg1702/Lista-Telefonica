import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript'
import { Pessoa } from '../contatos/models/pessoa.models';
import { PessoasService } from '../services/pessoas.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private pessoa : Pessoa
  public pessoaForm : FormGroup
  public arrayPessoa : any


  constructor(
    private formBuilder : FormBuilder,
    private pessoaService : PessoasService
  ) {}
  ngOnInit() {

    this.pessoaService.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa})

    this.pessoa = {id: Guid.createEmpty(), nome: "", sobrenome: "", tel: "", tipo: "", email: ""}

    this.pessoaForm = this.formBuilder.group ({
      id : [this.pessoa.id],
      nome : [this.pessoa.nome],
      sobrenome : [this.pessoa.sobrenome],
      tel : [this.pessoa.tel],
      tipo : [this.pessoa.tipo],
      email : [this.pessoa.email]
    })
    // throw new Error('Method not implemented.');
  }

  enviar() {
    if (this.pessoaForm.valid) {
      this.pessoaService.inserir(this.pessoaForm.value)
    }
  }

}