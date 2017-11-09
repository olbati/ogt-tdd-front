export class ZoneGrille {

    constructor(public largeur: number) {

    }

    colonne(x: number): number {
        return Math.floor((x * 7) / this.largeur);
    }

    changeLargeur(largeur: number): void {
        this.largeur = largeur;
    }
}