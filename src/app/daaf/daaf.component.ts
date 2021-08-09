import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'

@Component({
  selector: 'app-daaf',
  templateUrl: './daaf.component.html',
  styleUrls: ['./daaf.component.css']
})
export class DAAFComponent 
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




