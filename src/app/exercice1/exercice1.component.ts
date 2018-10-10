import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  affichageDefaut: String;
  nom: String;
  constructor() {
    this.nom = '';
    this.affichageDefaut = 'affichage par defaut';
  }

  afficheAction() {
    this.affichageDefaut = 'action !!';
  }

  ngOnInit() {
  }

}
