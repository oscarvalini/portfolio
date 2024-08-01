import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  animations: [trigger('badgeTrigger', [
    state('normal', style({transform: 'scale(1)'})),
    state('mouseSobre', style({transform: 'scale(1.1)'})),
    transition('normal <=> mouseSobre', animate('300ms 0s ease-out'))
  ])]
})
export class BadgeComponent {
  @HostListener('mouseenter')
  mouseenter() {
    console.log('enter')
    this.mouseover = true;
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.mouseover = false;
  }

  @HostBinding('@badgeTrigger') get mouseOverBadge() {
    return this.mouseover ? 'mouseSobre' : 'normal';
  }

  mouseover = false;
}
