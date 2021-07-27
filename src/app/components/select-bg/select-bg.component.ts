import { Component, Input, OnInit } from '@angular/core';

interface background {
    name: string;
    viewValue: string;
  }

@Component({
  selector: 'app-select-bg',
  templateUrl: './select-bg.component.html',
  styleUrls: ['./select-bg.component.css']
})

export class SelectBgComponent implements OnInit {
    selected: string;
    title: string;
    ImagePath: string;
    backgrounds: background[] = [
        {name: 'Daisi', viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png"},
        {name: 'Shiri', viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png"},
        {name: 'Sarha', viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png"},
        {name: 'Rivka', viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png"},
        {name: 'Noa',   viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png"},
        {name: 'Erika', viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png"},
        {name: 'Eli',   viewValue: "https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png"}
      ];
      
    constructor() {
        this.selected = "none";
        this.ImagePath = this.getUrl(this.selected);
        this.title = "Welcome to BIGVU"
    }
    ngOnInit(): void{
    }

    Changed(value: string){
        console.log(value);
        this.ImagePath = this.getUrl(value);
    }

    getUrl(value: string)  {
        for (let index = 0; index < this.backgrounds.length; index++) {
            if(value === this.backgrounds[index].name) {
               return  this.backgrounds[index].viewValue;
            }
       }
       return this.backgrounds[0].viewValue;
       
    }    
    
}



