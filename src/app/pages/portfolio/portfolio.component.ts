import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  aboutPortfolio: string = "O trabalho “Portefólio Reflexivo de Aprendizagens” insere-se na avaliação final do Módulo PRA, no âmbito do Curso de Programador Informática do IEFP. Tem como objectivo reflectir sobre o meu próprio processo de aprendizagem, evidenciando competências ao nível do conhecimento e aprendizado durante este percurso.\nO trabalho contém:\n• Apresentação pessoal/ profissional, onde falarei do meu percurso escolar e profissional até aos dias de hoje.\n• Apresentação de cada módulo por ordem numérica, contempla a integração de trabalhos efetuados e respetivas reflexões.\n• Outros trabalhos de interesse.\n• Balanço de aprendizagens e projetos futuros.\n• Agradecimentos.".replace(/\n/g, '<br>');
  

  ngOnInit(): void {
  }

}
