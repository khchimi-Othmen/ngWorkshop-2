import { Component } from '@angular/core';
import {Emploi} from "../core/model/emploi";

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent {

  listeEmploi: Emploi[] = [
    { reference: 'Emp001', titre: 'Software Engineer', entreprise: 'ACME Inc.', etat: true },
    { reference: 'Emp002', titre: 'Data Analyst', entreprise: 'Data Inc.', etat: false },
    { reference: 'Emp003', titre: 'Product Manager', entreprise: 'Product Inc.', etat: true }
  ];
  entrepriseSearch: any;
}
