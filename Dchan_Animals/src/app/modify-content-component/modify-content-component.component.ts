import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
  @Output() updateAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
 
  newAnimal?:IAnimals; //new animals!!! of whateever my interface is now
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogComponent);
  }

  //something about adding content
  addContent(title:string,description:string,creator:string,imgURL:string,type:string){
    this.newAnimal = {
      title:title,
      description:description,
      creator:creator,
      imgURL:imgURL,
      type:type,
    };
    //emit emits a value...
    //after some deeep thoughts i believe this is what acurally sends the data to the parent element
    this.newAnimalEvent.emit(this.newAnimal);
  }
  updateContent(id:string,title:string,description:string,creator:string,imgURL:string,type:string){
    this.newAnimal = {
      id:parseInt(id),
      title:title,
      description:description,
      creator:creator,
      imgURL:imgURL,
      type:type,
    };
    //emit emits a value...
    //after some deeep thoughts i believe this is what acurally sends the data to the parent element
    this.updateAnimalEvent.emit(this.newAnimal);
  }


}
