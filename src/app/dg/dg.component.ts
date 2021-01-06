import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { __values } from 'tslib';
import *as $ from 'jquery'

@Component({
  selector: 'app-dg',
  templateUrl: './dg.component.html',
  styleUrls: ['./dg.component.css']
})
export class DGComponent
{
  little='angular-bootstrap-scaffolding';



  ngOnInit(){
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    
  };
}
