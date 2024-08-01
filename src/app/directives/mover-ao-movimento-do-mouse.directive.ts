import { AnimationBuilder, AnimationMetadata, animate, style } from '@angular/animations';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
  selector: '[moverAoMovimentoDoMouse]'
})
export class MoverAoMovimentoDoMouseDirective {

  numeroDeChamadas = 0;

  constructor(private el: ElementRef<HTMLDivElement>, private r2: Renderer2, private builder: AnimationBuilder) {}

  @HostListener('mousemove', ['$event'])
  public onMouseMove(e: MouseEvent) {

    if(this.numeroDeChamadas++ < 10) {
      return;
    }

    this.numeroDeChamadas = 0;

    const clientWidth = this.el.nativeElement.clientWidth;
    const clientHeight = this.el.nativeElement.clientHeight;

    const x = e.offsetX + 1 - (clientWidth / 2);
    const y = (e.offsetY - clientHeight) * -1 + 1 - (clientHeight / 2);

    const rotateX = (x / clientWidth) * 15;
    const rotateY = (y / clientHeight) * 15;

    const metadata = this.rotate(rotateX, rotateY);

    const factory = this.builder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  }

  private rotate(y: number, x: number): AnimationMetadata[] {
    return [
      animate(100, style({
        transform: `rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`,
      }, ))
    ]
  }

}
