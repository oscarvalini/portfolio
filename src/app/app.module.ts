import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabalhosComponent } from './trabalhos/trabalhos.component';
import { TrabalhoComponent } from './trabalhos/trabalho/trabalho.component';
import { ComponentsModule } from './components/components.module';
import { MoverAoMovimentoDoMouseDirective } from './directives/mover-ao-movimento-do-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    TrabalhosComponent,
    TrabalhoComponent,
    MoverAoMovimentoDoMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
