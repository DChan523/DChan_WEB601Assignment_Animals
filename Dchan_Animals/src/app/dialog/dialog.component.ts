import { Component, OnInit,Inject, EventEmitter } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  // @Output() newAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
  // @Output() updateAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
 
  newAnimal?:IAnimals;
  newAnimalEvent: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA)public data:IAnimals) {
    
  }

  ngOnInit(): void {
  }
  addContent(title:string,description:string,creator:string,imgURL:string,type:string){
    this.newAnimal = {
      title:title,
      description:description,
      creator:creator,
      imgURL:imgURL,
      type:type,
    };
    this.newAnimalEvent.emit(this.newAnimal);
  }
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
