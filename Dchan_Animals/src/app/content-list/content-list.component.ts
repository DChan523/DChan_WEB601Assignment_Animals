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

}
