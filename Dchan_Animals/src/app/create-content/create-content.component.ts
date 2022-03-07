import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  //output sends data from child to parent eventemmiter is the thing that sends the data
  @Output() newAnimalEvent:EventEmitter<IAnimals> = new EventEmitter<IAnimals>();

  newAnimal?:IAnimals; //new animals!!! of whateever my interface is now
  constructor() { }

  ngOnInit(): void {
  }
  //something about adding content
  addContent(id:string,title:string,description:string,creator:string,imgURL:string,type:string){
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
    this.newAnimalEvent.emit(this.newAnimal);
  }
}
