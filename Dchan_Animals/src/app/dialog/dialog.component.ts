import { Component, OnInit } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  // @Output() newAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
  // @Output() updateAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
 
  // newAnimal?:IAnimals; //new animals!!! of whateever my interface is now
  // constructor() { }

  ngOnInit(): void {
  }
  // addContent(title:string,description:string,creator:string,imgURL:string,type:string){
  //   this.newAnimal = {
  //     title:title,
  //     description:description,
  //     creator:creator,
  //     imgURL:imgURL,
  //     type:type,
  //   };
  //   this.newAnimalEvent.emit(this.newAnimal);
  // }
  // updateContent(id:string,title:string,description:string,creator:string,imgURL:string,type:string){
  //   this.newAnimal = {
  //     id:parseInt(id),
  //     title:title,
  //     description:description,
  //     creator:creator,
  //     imgURL:imgURL,
  //     type:type,
  //   };
  //   this.updateAnimalEvent.emit(this.newAnimal);
  // }
}
