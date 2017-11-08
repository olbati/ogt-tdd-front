import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {Analyseur} from './analyseur';
import {Grille} from './grille';
import {Arbitre} from './arbitre';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
      ], providers: [Analyseur, Arbitre, Grille], imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;

  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('démarre une partie vierge', async(() => {


   fixture.detectChanges();
   fixture.whenStable().then(() => {
   nativeElement = fixture.debugElement.nativeElement;
   expect(nativeElement.querySelector('.grille').innerHTML).toEqual(`.......
.......
.......
.......
.......
.......
`);
   });
   }));

   it('joue une fois', async(() => {

   app.colonne = 0;
   app.jouer();
   fixture.detectChanges();
   fixture.whenStable().then(() => {

   expect(nativeElement.querySelector('.grille').innerHTML).toEqual(`.......
.......
.......
.......
.......
*......
`);
   });
   }));
   it('joue deux fois', async(() => {
   app.colonne = 0;
   app.jouer();
   app.colonne = 1;
   app.jouer();
   fixture.detectChanges();
   fixture.whenStable().then(() => {

   expect(nativeElement.querySelector('.grille').innerHTML).toEqual(`.......
.......
.......
.......
.......
*o.....
`);
   });
   }));

});

