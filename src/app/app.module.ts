import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Analyseur } from './analyseur';
import { Grille } from './grille';
import { Arbitre } from './arbitre';
import { AppComponent } from './app.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Arbitre, Grille, Analyseur],
  bootstrap: [AppComponent]
})
export class AppModule { }
