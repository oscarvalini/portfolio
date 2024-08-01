import { TrabalhoComponent } from './trabalho/trabalho.component';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { AnimacaoVisibilidadeService } from '../services/animacao-visibilidade/animacao-visibilidade.service';
import { animacaoVisibilidade } from '../animations/animacao-visibilidade.animation';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss'],
  animations: [animacaoVisibilidade,
    trigger('saltarTrigger', [
      state('normal', style({transform: 'scale(1)'})),
      state('maior', style({transform: 'scale(1.05)', border: '2px solid blue'})),
      transition('normal <=> maior', animate('300ms 0s ease-out'))
    ])]
})
export class TrabalhosComponent {

  @ViewChildren(TrabalhoComponent) components!: QueryList<TrabalhoComponent>;

  trabalhos = [
    {
      empresa: "IBM",
      cargo: "Desenvolvedor Frontend",
      periodo: {inicio: '04/07/2022'},
      resumo: `Atualmente atuo em um grande projeto para o setor bancário. O meu papel na squad é desenvolver várias das telas que compõe o novo sistema
      utilizando Angular 13 e uma biblioteca de componentes proprietária.
      Trabalhamos em conjunto com outras consultorias utilizando a arquitetura de microapps, para que seja possível dividir o projeto em vários subsistemas.`,
      atividades: [
        'Construção das telas de acordo com os protótipos desenvolvidos pela equipe de UX',
        'Desenvolvimento de testes unitários',
        'Internacionalização e tradução das telas para 3 regiões',
        'Integração com backend utilizando REST e GraphQL',
        'Deploy utilizando ações do Github',
        'Participação nas cerimônias de Scrum',
        'Atualização dos cards no Jira',
     ],
     tecnologias: ['Angular 13', 'RxJS', 'Jasmine/karma', 'GraphQL', 'Apollo', 'Github']
    },
    {
      empresa: "Reconditec Sistemas",
      cargo: "Analista de Desenvolvimento",
      periodo: {inicio: '14/11/2020', fim: '24/06/2022'},
      resumo: `Desenvolvimento e manutenção de aplicações proprietárias utilizando diversas tecnologias. Entre as aplicações que atuei estão: Sistema de telemetria para monitoramento de equipamentos em campo, com visualização web e mobile; sistemas de controle de horas para funcionários em Home Office e de campo, com visualização web e mobile; e sistema para controle de horas de produção e monitoramento de progresso e incidentes com atualização em tempo real`,
      atividades: [
        'Construção e manutenção do backend, frontend e aplicações mobile',
        'Deploy de aplicações e publicação nas lojas',
        'Internacionalização e tradução das aplicações'
     ],
     tecnologias: [ 'Angular 13', 'NodeJS', 'Flutter', 'MQTT', 'WebSocket', 'Codeigniter', 'JQuery', 'Ionic', 'Gitlab' ]
    },
  ];


  verMais = false;
  indiceSelecionado?: number;
  width = 90;

  constructor(private animacaoVisibilidade: AnimacaoVisibilidadeService) {}

  ngOnInit() {
    this.width = 90 / this.trabalhos.length;
  }

  visibilidadeDoTopico(ordemDoTopico: number) {
    return this.animacaoVisibilidade.visibilidadeDoTopico(ordemDoTopico);
  }

}
