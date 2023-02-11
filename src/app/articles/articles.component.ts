import {Component, OnInit} from '@angular/core';
import {article} from "../core/model/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{
  nombreArticles: any;
  limit = 5;
  ngOnInit(): void {
  }
  constructor() {
    this.nombreArticles = this.listeArticles.length;
  }
  titre = 'Les articles du jour';
  listeArticles: article[] = [
    {titre:'le championnat du monde',contenu:'le championnat du monde de cette année est',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
    {titre:'le nouveau parents',contenu:'le nouveau parents est',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'}
  ];
  updateLimit() {
    this.limit = this.limit;
  }
}
