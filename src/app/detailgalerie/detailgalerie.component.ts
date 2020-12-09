import { Component, OnInit, Input } from '@angular/core';
import { Detail } from '../shared/detail';

@Component({
  selector: 'app-detailgalerie',
  templateUrl: './detailgalerie.component.html',
  styleUrls: ['./detailgalerie.component.css']
})
export class DetailgalerieComponent implements OnInit {

 @Input()
  detail : Detail;
  constructor() { }

  ngOnInit(): void {
  }

}
