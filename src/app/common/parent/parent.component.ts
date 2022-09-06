import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public userData:any=[];
  constructor(public userservice:SharedService,public hhtp:HttpClient) { }

  ngOnInit(): void {
    this.userservice.getPosts().subscribe(res =>
      {
        this.userData = res;
        console.log(this.userData);
      })
  }

}
