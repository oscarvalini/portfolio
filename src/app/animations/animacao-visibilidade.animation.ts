import { trigger, state, style, transition, animate } from '@angular/animations';

export const animacaoVisibilidade = trigger('visibleState', [
  state('invisible', style({
    opacity: 0
  })),
  state('visible', style({
    opacity: 1
  })),
  transition('invisible => visible', [
    animate('1s'),
    // animate(2000)
  ])
])
