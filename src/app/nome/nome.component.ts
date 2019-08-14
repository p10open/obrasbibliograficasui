import { Component, OnInit } from '@angular/core';
import { Nomes } from '../models/nomes';
import { NomeService } from '../services/nome.service';
import { ObraBibliografica } from '../models/obraBibliografica';
import { RespostaProcessamento } from '../models/respostaProcessamento';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.scss']
})

export class NomeComponent implements OnInit {
  model = new Nomes();
  
  constructor(
    private nomeService: NomeService
  ) {
    this.model.index = 0;
  }

  ngOnInit() {
  }

  adicionarNome(evento) {

    if (evento.key !== "Enter")
      return;

    if(!this.model.nomeAtual)
      return;

    if (!this.model.valores)
      this.model.valores = new Array();

    this.model.valores[this.model.index] = this.model.nomeAtual;
    this.model.index++;
    this.model.nomeAtual = "";
  }

  enviarNomes() {
    let obras = new Array<ObraBibliografica>();
    this.model.valores.forEach((valor) => {
      let obra = new ObraBibliografica();
      obra.nome = valor;

      obras.push(obra);
    });

    this.nomeService.processarNomes(obras).subscribe(result => {
      this.alterarValores(result);
    }, error => {
      console.log(error);
    });
  }

  alterarValores(respostaProcessamento: RespostaProcessamento) {
    this.model.valoresProcessados = [];

    respostaProcessamento.obrasBibliograficas.forEach(obra => { this.model.valoresProcessados.push(obra.nome) });
    this.model.processado = true;
  }

  limparNomes() {
    this.model.valores = null;
    this.model.index = 0;
    this.model.nomeAtual = "";
    this.model.processado = false;
    this.model.quantidade = 0;
    this.model.valoresProcessados = null;
  }

}
