import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
public data:any =[
  {
 name:'amit',
 dob: new Date(7,2,2006)},
 {
  name:'suman',
  dob: new Date(14,8,2001),

 },
 {
  name:'ankit',
  dob: new Date(29,5,2019)
 }

]
  constructor() { }

  ngOnInit(): void {
  }

}
