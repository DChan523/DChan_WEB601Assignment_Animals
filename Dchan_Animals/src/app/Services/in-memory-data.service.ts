import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import { IAnimals } from '../helper-files/content-interface';
import { animells } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() {

  }

  createDb(){
    const anime: IAnimals[] = animells;
    return {anime}
  }
}
