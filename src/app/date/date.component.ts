import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  data1!: any;
    
  constructor() { }

  ngOnInit(): void {
  }
  onchangefunction(data:any){
    // // console.log(data.target.value);
    // const date= new Date(data.target.value)
    // const date2 = date.getDate()
    // const hours = date.getHours()
    // const min = date.getMinutes()
    // const sec = date.getSeconds()
    // const totaltime =`${date2} ${hours} ${min} ${sec} `
    // this.data1 =totaltime
    // // const date2 = date.getDate()
    // console.log(this.data1)

  }
}
