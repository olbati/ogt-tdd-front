import {Arbitre, Statut} from './arbitre';
import {Grille} from './grille';
import {Analyseur} from './analyseur';

describe(' arbitre', () => {
  let arbitre: Arbitre;
  let grille: Grille;
  let analyseur: Analyseur;

  beforeEach(() => {
    grille = new Grille();
    analyseur = new Analyseur(grille);
    arbitre = new Arbitre(analyseur);
  });
  describe('sait à qui le tour de jouer', () => {

    it(' début de partie à jaune', () => {
      expect(arbitre.tour()).toEqual('*');
    });

    it(' second tour à rouge', () => {
      arbitre.joue(0);
      expect(arbitre.tour()).toEqual('o');
    });

    it(' troisième tour à jaune', () => {
      arbitre.joue(0);
      arbitre.joue(0);
      expect(arbitre.tour()).toEqual('*');
    });
  });

  describe('sait qui a gagné', () => {

    it(' cas début de partie', () => {

      expect(arbitre.gagnant()).toEqual(Statut.EN_COURS);
    });

    it(' cas du jaune qui gagne', () => {
      spyOn(analyseur, 'analyser').and.callFake(function (couleur) {
        return couleur == '*';
      });
      const arbitre: Arbitre = new Arbitre(analyseur);

      expect(arbitre.gagnant()).toEqual(Statut.JAUNE_GAGNE);
    });

    it(' cas du rouge qui gagne', () => {
      spyOn(analyseur, 'analyser').and.callFake(function (couleur) {
        return couleur == 'o';
      });
      const arbitre: Arbitre = new Arbitre(analyseur);
      expect(arbitre.gagnant()).toEqual(Statut.ROUGE_GAGNE);
    });

    it(' cas d\'une partie nulle', () => {
      spyOn(analyseur, 'partieNulle').and.returnValue(true);
      const arbitre: Arbitre = new Arbitre(analyseur);
      expect(arbitre.gagnant()).toEqual(Statut.PARTIE_NULLE);
    });
  });

  describe('une victoire simple', () => {

    it('cas de victoire en 4 coups', () => {
      expect(arbitre.gagnant()).toEqual(Statut.EN_COURS);
      arbitre.joue(0);
      arbitre.joue(0);
      arbitre.joue(1);
      arbitre.joue(1);
      arbitre.joue(2);

      arbitre.joue(2);
      expect(arbitre.gagnant()).toEqual(Statut.EN_COURS);

      arbitre.joue(3);
      expect(arbitre.gagnant()).toEqual(Statut.JAUNE_GAGNE);

    });
  });


});
