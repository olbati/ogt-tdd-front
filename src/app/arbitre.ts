import {Analyseur} from './analyseur';
import {Grille} from './grille';

import {Injectable} from '@angular/core';

@Injectable()
export class Arbitre {

  jaune: boolean = true;

  constructor(public analyseur: Analyseur) {
  }

  joue(colonne: number) {
    this.analyseur.grille.accepter(colonne, this.tour());
    this.jaune = !this.jaune;
  }

  tour(): string {

    return this.jaune ? '*' : 'o';
  }

  gagnant(): Statut {
    if (this.analyseur.analyser('*'))
      return Statut.JAUNE_GAGNE;
    else if (this.analyseur.analyser('o'))
      return Statut.ROUGE_GAGNE;
    else if (this.analyseur.partieNulle())
      return Statut.PARTIE_NULLE;

    return Statut.EN_COURS;
  }
}
export enum Statut {
  EN_COURS, JAUNE_GAGNE, ROUGE_GAGNE, PARTIE_NULLE
}
