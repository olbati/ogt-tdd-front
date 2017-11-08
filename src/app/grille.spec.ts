import {Grille} from './grille';

describe(' Grille ', () => {


  let grille: Grille;

  beforeEach(() => {
    grille = new Grille();
  });


  describe(' état ', () => {
    it(' initialement l état des cellules doit être vide ', () => {

      expect(grille.cellule(0, 0)).toEqual('.');
      expect(grille.cellule(2, 3)).toEqual('.');
    });
  });

  describe(' accepter jetons ', () => {
    it(' change l\'état avec jeton * ', () => {
      grille.accepter(3, '*');
      expect(grille.cellule(3, 0)).toEqual('*');
    });
    it(' change l\'état avec jeton o ', () => {
      grille.accepter(3, 'o');
      expect(grille.cellule(3, 0)).toEqual('o');
    });

    it(' change l\'état avec deux jetons dans la même colonne ', () => {
      grille.accepter(3, 'o');
      grille.accepter(3, '*');
      expect(grille.cellule(3, 1)).toEqual('*');
    });

    it(' change l\'état avec deux jetons dans différentes colonnes ', () => {
      grille.accepter(4, 'o');
      grille.accepter(3, '*');
      expect(grille.cellule(3, 0)).toEqual('*');
      expect(grille.cellule(4, 0)).toEqual('o');
    });
    it(' accepter jusqu\'à 6 jetons dans une colonne ', () => {
      expect(grille.accepter(4, 'o')).toBe(true);
      expect(grille.accepter(4, '*')).toBe(true);
      expect(grille.accepter(4, 'o')).toBe(true);
      expect(grille.accepter(4, '*')).toBe(true);
      expect(grille.accepter(4, 'o')).toBe(true);
      expect(grille.accepter(4, '*')).toBe(true);
      expect(grille.accepter(4, '*')).toBe(false);
    });
  });

  describe(' représentation ', () => {
    it(' affichage tableau vide', () => {
      const GRILLE_VIDE = ('.'.repeat(7) + '\n').repeat(6);
      expect(grille.afficher()).toEqual(GRILLE_VIDE);
    });
    it(' affichage tableau avec un jeton', () => {
      const GRILLE_NON_VIDE = ('.'.repeat(7) + '\n').repeat(5) + '*......\n';
      grille.accepter(0, '*');
      expect(grille.afficher()).toEqual(GRILLE_NON_VIDE);
    });
  });

  describe(' chargement ', () => {

    it(' charge une grille vide', () => {
      const chaine = `.......
.......
.......
.......
.......
.......`;
      grille.accepter(0, '*');
      grille.charger(chaine);
      expect(grille.cellule(0, 0)).toEqual('.');
      expect(grille.cellule(6, 5)).toEqual('.');
    });
    it(' charge une grille avec des jetons en première ligne', () => {
      const chaine = `.......
.......
.......
.......
.......
*o.....`;
      grille.charger(chaine);
      expect(grille.cellule(0, 0)).toEqual('*');
      expect(grille.cellule(1, 0)).toEqual('o');
    });
    it(' charge une grille avec des jetons sur plusieurs lignes', () => {
      const chaine = `......*
......*
......*
.*....*
.o....*
*o....*`;
      grille.charger(chaine);
      expect(grille.cellule(0, 0)).toEqual('*');
      expect(grille.cellule(1, 0)).toEqual('o');
      expect(grille.cellule(1, 1)).toEqual('o');
      expect(grille.cellule(1, 2)).toEqual('*');
      expect(grille.cellule(6, 5)).toEqual('*');

    });
  })
});
