import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'

@Component({
  selector: 'app-dsin',
  templateUrl: './dsin.component.html',
  styleUrls: ['./dsin.component.css']
})
export class DSINComponent
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

