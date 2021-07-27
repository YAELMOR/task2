import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  ImagePath: string;

  constructor() { 
    //image location
    this.ImagePath = "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png";
    
  }

  ngOnInit(): void {
  }

}


//style="width: 640px;height: 360px;"
 //           style="padding-left: 50%;"
/*
<style>
              img {
                border: 20px solid #ddd;
                border-radius: 4px;
                padding: 0px;
                width: 150px;
                padding-left: 50%;
                width: 640px;
                height: 360px;
              }
              </style> */