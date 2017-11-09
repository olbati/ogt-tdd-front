import  {ZoneGrille} from './zone-grille';

describe(' Zone Grille', () => {

  it(' s\'initialise avec une largeur ', () => {
    let zoneGrille = new ZoneGrille(140);
    expect(zoneGrille.largeur).toEqual(140);
  });

  describe('retourne colonne sélectionnée', () => {
    it(' cas de la sélection égale à zéro ', () => {
      let zoneGrille = new ZoneGrille(140);
      let x: number = 0;
      expect(zoneGrille.colonne(x)).toEqual(0);
    });

    it(' cas de la sélection égale à 1 ', () => {
      let zoneGrille = new ZoneGrille(140);
      let x: number = 20;
      expect(zoneGrille.colonne(x)).toEqual(1);
    });
    it(' cas de la sélection égale à 6 ', () => {
      let zoneGrille = new ZoneGrille(140);
      let x: number = 139;
      expect(zoneGrille.colonne(x)).toEqual(6);
    });
    it(' cas d\'une largeur différente à 100 ', () => {
      let zoneGrille = new ZoneGrille(100);
      let x: number = 50;
      expect(zoneGrille.colonne(x)).toEqual(3);
    });
  });

  describe(' peut changer de largeur', () => {
    it(' cas de la sélection égale à 1 ', () => {
      let zoneGrille = new ZoneGrille(140);
      let x: number = 20;
      expect(zoneGrille.colonne(x)).toEqual(1);
      zoneGrille.changeLargeur(280);
      expect(zoneGrille.colonne(x)).toEqual(0);
    });
  });

});
