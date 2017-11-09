import { Grille } from './grille';
import { Injectable } from '@angular/core';

@Injectable()
export class Analyseur {

    constructor(public grille: Grille) { }


    analyser(couleur: string): boolean {
        return this.verifierAlignementHorizontal(couleur)
            || this.verifierAlignementVertical(couleur)
            || this.verifierAlignementDiagonal(couleur);

    }

    verifierAlignementHorizontal(couleur): boolean {
        for (let ligne = 0; ligne < 5; ligne++) {
            for (let colonne = 0; colonne < 4; colonne++) {
                if (this.verifierAlignementHorizontalEn(ligne, colonne, couleur)) {
                    return true;
                }
            }
        }
        return false;
    }

    verifierAlignementHorizontalEn(ligne, colonne, couleur): boolean {

        for (let index = 0; index < 4; index++) {
            if (this.grille.cellule(colonne + index, ligne) != couleur) {
                return false;
            }
        }
        return true;
    }

    verifierAlignementVertical(couleur): boolean {
        for (let colonne = 0; colonne < 7; colonne++) {
            for (let ligne = 0; ligne < 3; ligne++) {
                if (this.verifierAlignementVerticalEn(ligne, colonne, couleur)) {
                    return true;
                }
            }
        }
        return false;
    }

    verifierAlignementVerticalEn(ligne, colonne, couleur): boolean {

        for (let index = 0; index < 4; index++) {
            if (this.grille.cellule(colonne, ligne + index) != couleur)
                return false;
        }
        return true;
    }

    verifierAlignementDiagonal(couleur): boolean {
        for (let colonne = 0; colonne < 4; colonne++) {
            for (let ligne = 0; ligne < 3; ligne++) {
                if (this.verifierAlignementDiagonalHautEn(ligne, colonne, couleur)
                    || this.verifierAlignementDiagonalBasEn(ligne, colonne, couleur))
                    return true;

            }
        }
        return false;
    }

    verifierAlignementDiagonalHautEn(ligne, colonne, couleur): boolean {
        for (let index = 0; index < 4; index++) {
            if (this.grille.cellule(colonne + index, ligne + index) != couleur)
                return false;
        }
        return true;
    }


    verifierAlignementDiagonalBasEn(ligne, colonne, couleur): boolean {
        for (let index = 0; index < 4; index++) {
            if (this.grille.cellule(colonne + index, ligne + 3 - index) != couleur)
                return false;
        }
        return true;
    }

    partieNulle(): boolean {
        return !this.analyser('*') && !this.analyser('o') && !this.celluleLibre();
    }

    celluleLibre(): boolean {
        for (let colonne = 0; colonne < 7; colonne++) {
            if (this.grille.cellule(colonne, 5) == '.')
                return true;
        }
        return false;
    }
}