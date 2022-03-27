import { Component, OnInit } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { animells } from '../helper-files/contentDb';
import { AnimalServiceService } from '../Services/animal-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  animells:IAnimals[]

  constructor(private animalService:AnimalServiceService){
    
    this.animells = [];

    console.log("Maybe this will work");

    this.animalService.getContentObs().subscribe(animalArray => {
      return this.animells = animalArray;
    });
  }
  ngOnInit(): void {
  }
  getAnimalFromServer():void{
    this.animalService.getContentObs().subscribe(animalArray => this.animells = animalArray);
  }

  addContentToList(newContentItem:IAnimals):void{
    this.animalService.addContent(newContentItem).subscribe(newContentFromServer =>{
      this.animells.push(newContentFromServer);
      this.animells = [...this.animells];
    });
  }
  updateContentInList(contentItem:IAnimals):void{
    this.animalService.updateContent(contentItem).subscribe(()=>{
      this.getAnimalFromServer();
    })
  }
}
