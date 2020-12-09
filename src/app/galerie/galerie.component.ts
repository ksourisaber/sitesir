import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Detail} from '../shared/detail';
import { DETAILS} from '../shared/details';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  details:Detail[]=DETAILS;
  selectedgalerie: Detail;

  constructor() { }

  ngOnInit(): void {
  }
  onselect(detail : Detail){
    this.selectedgalerie=detail;

  }

}
