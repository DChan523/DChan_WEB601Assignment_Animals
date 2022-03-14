import { Injectable } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { animells } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  constructor() { }

  //this one is a no bueno causes its synchronous
  getContent():IAnimals[]{
    return animells;
  }

  //this one is muy bien!
  getContentObs():Observable<IAnimals[]>{
    return of(animells);
  } 

  gobblyShark():Observable<IAnimals[]>{
    return of(animells);
  }
}
