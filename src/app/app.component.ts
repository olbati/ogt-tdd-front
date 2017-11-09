import {Component, ElementRef, ViewChild} from '@angular/core';
import {Arbitre, Statut} from './arbitre';
import {Analyseur} from './analyseur';
import {ZoneGrille} from './zone-grille';
import {Grille} from "./grille";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('grille') grille: ElementRef;
  colonne: number;

  constructor(public arbitre: Arbitre, public gril: Grille) {

  }


  getPosition(event: MouseEvent) {
    const zoneGrille = new ZoneGrille(this.grille.nativeElement.offsetWidth);
    this.arbitre.joue(zoneGrille.colonne(event.clientX));
  }

  jouer() {
    this.arbitre.joue(this.colonne);
  }

}
