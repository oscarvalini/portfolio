import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss'],
  animations: [
    trigger('verMaisTrigger', [
      state('verMais', style({maxHeight: '300px'})),
      state('verMenos', style({maxHeight: '1000px'})),
      transition('verMais => verMenos', animate('1s 0s')),
      transition('verMenos => verMais', animate('500ms 0s'))
    ]),
    trigger('botaoTrigger', [
      state('normal', style({})),
      state('focado', style({backgroundColor: 'blue', }))
    ])
  ]
})
export class TrabalhoComponent {

  @Input() empresa?: string;
  @Input() periodo?: { inicio: string, fim?: string };
  @Input() cargo?: string;
  @Input() resumo?: string;
  @Input() atividades?: string[];
  @Input() tecnologias?: string[];

  verMais = false;
  botaoFocado = false;
}
