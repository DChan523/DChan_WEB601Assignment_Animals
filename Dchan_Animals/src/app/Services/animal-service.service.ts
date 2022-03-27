import { Injectable } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { animells } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  constructor(private http:HttpClient) {

  }

  //this one is muy bien!
  getContentObs():Observable<IAnimals[]>{
    return this.http.get<IAnimals[]>("api/anime");
  } 
  addContent(newContentItem: IAnimals):Observable<IAnimals>{
    return this.http.post<IAnimals>("api/anime",newContentItem, this.httpOptions);
  }
  updateContent(contentItem:IAnimals):Observable<any>{
    return this.http.put("api/anime",contentItem,this.httpOptions);
  }
}
