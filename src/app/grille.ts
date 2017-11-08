import {Injectable} from '@angular/core';

@Injectable()
export class Grille {

  cellules: string[][] = [];

  constructor() {
    this.initGrille();
  }

  initGrille() {
    for (let colonne = 0; colonne < 7; colonne++) {
      this.cellules[colonne] = [];
    }
  }

  cellule(colonne: number, ligne: number): string {
    return this.cellules[colonne][ligne] || '.';
  }

  accepter(colonne: number, couleur: string): boolean {
    if (this.cellules[colonne].length > 5) {
      return false;
    }
    this.cellules[colonne].push(couleur);
    return true;
  }

  afficher(): string {
    const resultBuffer: string[] = Array(6).fill('');

    for (let colonne = 0; colonne < 7; colonne++) {
      for (let ligne = 0; ligne < 6; ligne++) {
        resultBuffer[5 - ligne] += this.cellules[colonne][ligne] || '.';
      }
    }

    return resultBuffer.join('\n') + '\n';
  }

  charger(chaine: string) {
    this.initGrille();

    for (let ligne = 5; ligne >= 0; ligne--) {
      for (let colonne = 0; colonne < 7; colonne++) {
        this.accepter(colonne, chaine[(ligne * 8) + colonne]);
      }
    }
  }

}
