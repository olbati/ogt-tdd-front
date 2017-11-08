import { Analyseur } from './analyseur';
import { Grille } from './grille';

describe(' un analyseur', () => {

    describe('détecte zéro alignement', () => {
        it('dans une grille vide', () => {
            const grille: Grille = new Grille();
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(false);
        });

    it('dans une grille non vide', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
.......
.*.....
.o.....
o*oo...`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(false);
        });
    });


    describe(' détecte un alignement horizontal' , () => {
        it('en bas à gauche', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
.......
.*.....
.o.....
oooo...`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });

        it('en bas à droite', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
.......
.*.....
.o.....
.*.oooo`;
            grille.charger(chaine);
            const analyseur : Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });

         it('en deuxième ligne', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
.......
.*.....
.o.oooo
.*.oo*o`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });
    });

  describe(' détecte un alignement vertical' , () => {

     it('en bas à gauche', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
o......
o*.....
oo.....
o*.....`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });
     it('en haut à droite', () => {
            const grille: Grille = new Grille();
            const chaine = `......o
......o
......o
o*....o
oo....*
o*....*`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });

  });

 describe(' détecte un alignement diagonal vers le haut' , () => {

     it('en bas à gauche', () => {
            const grille: Grille = new Grille();
            const chaine = `.......
.......
...o...
o*o*...
oo**...
o**o...`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });

  });

  describe(' détecte un alignement diagonal vers le bas' , () => {

     it('en haut à gauche', () => {
            const grille: Grille = new Grille();
            const chaine = `o......
*o.....
*ooo...
o*oo...
o***...
o**o...`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('o')).toBe(true);
        });

  });

   describe(' détecte un alignement avec jeton * ' , () => {

     it('en haut à gauche', () => {
            const grille: Grille = new Grille();
            const chaine = `*......
**.....
*o*o...
o*o*...
o***...
o**o...`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('*')).toBe(true);
        });

  }); it('avec une grille pleine', () => {
            const grille: Grille = new Grille();
            const chaine = `**oo**o
oo**oo*
**oo**o
oo**oo*
**oo**o
oo**oo*`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('*')).toBe(false);
            expect(analyseur.analyser('o')).toBe(false);
            expect(analyseur.partieNulle()).toBe(true);
        });

   describe(' détecte une partie nulle' , () => {

     it('avec une grille pleine', () => {
            const grille: Grille = new Grille();
            const chaine = `**oo**o
oo**oo*
**oo**o
oo**oo*
**oo**o
oo**oo*`;
            grille.charger(chaine);
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.analyser('*')).toBe(false);
            expect(analyseur.analyser('o')).toBe(false);
            expect(analyseur.partieNulle()).toBe(true);
        });
        it('avec une grille vide', () => {
            const grille: Grille = new Grille();
            const analyseur: Analyseur = new Analyseur(grille);
            expect(analyseur.partieNulle()).toBe(false);
        });

  });

});
