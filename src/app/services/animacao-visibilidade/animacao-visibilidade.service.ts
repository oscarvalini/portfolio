import { Injectable } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimacaoVisibilidadeService {

  constructor() { }

  counter = 0;

  mostrarTopicos() {
    from([1,2,3,4,5,6,7,8,9])
      .pipe(concatMap(val => of(val)
      .pipe(delay(2000))))
      .subscribe((val) => this.counter = val);
  }

  visibilidadeDoTopico(numeroTopico: number) {
    if(this.counter >= numeroTopico) {
      return 'visible';
    }

    return 'invisible';
  }
}
