import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { animacaoVisibilidade } from './animations/animacao-visibilidade.animation';
import { AnimacaoVisibilidadeService } from './services/animacao-visibilidade/animacao-visibilidade.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animacaoVisibilidade, trigger('navItemTrigger', [
    state('normal', style({})),
    state('selecionado', style({transform: 'translateY(-5px)'})),
    transition('normal <=> selecionado', animate(200))
  ])]
})
export class AppComponent implements OnInit, AfterViewInit {

  @HostBinding('class.dark-theme') get darkTheme() {
    return this._darkTheme;
  }

  @ViewChild('header', {read: ElementRef}) header!: ElementRef;

  mostrarBotaoSubir = false;
  menuSelecionado?: number;
  _darkTheme = true;

  constructor(private animacaoVisibilidade: AnimacaoVisibilidadeService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.animacaoVisibilidade.mostrarTopicos();
  }

  ngAfterViewInit() {
    const cb: IntersectionObserverCallback = this.aoIntersectarCabecalho;
    const obs = new IntersectionObserver((entries, obs) => this.aoIntersectarCabecalho(entries, obs));
    obs.observe(this.header.nativeElement);
  }

  aoIntersectarCabecalho(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    console.log('entries: ', entries);
    console.log('observer: ', observer);
    this.mostrarBotaoSubir = !entries[0].isIntersecting;
    console.log('mostrar botao subir: ', this.mostrarBotaoSubir);
  }

  visibilidadeDoTopico(ordemDoTopico: number) {
    return this.animacaoVisibilidade.visibilidadeDoTopico(ordemDoTopico);
  }

  trocarTema() {
    this._darkTheme = !this._darkTheme;
    this.cdr.detectChanges();
  }

}
