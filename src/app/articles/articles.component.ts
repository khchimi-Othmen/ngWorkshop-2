import {Component, OnInit} from '@angular/core';
import {article} from "../core/model/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {


  titre = 'Les articles du jour';
  nombreArticles: number;
  limit: number;


  listeArticles: article[] = [
    {titre:'le championnat du monde',contenu:'le championnat du monde de cette année est',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
    {titre:'le nouveau parents',contenu:'le nouveau parents est',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
    {titre: 'Comment écrire votre CV' ,contenu: 'Pour réussir à décraucher un emploi...',auteur: 'Marie Elsa',date: '02/04/2017' ,categorie: 'Travail'}
];

  constructor() {
    this.nombreArticles = this.listeArticles.length;
    this.limit=this.nombreArticles;
  }

  updateLimit() {
  this.limit=this.limit;
  }
}
