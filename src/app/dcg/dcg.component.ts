import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'

@Component({
  selector: 'app-dcg',
  templateUrl: './dcg.component.html',
  styleUrls: ['./dcg.component.css']
})
export class DCGComponent 
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