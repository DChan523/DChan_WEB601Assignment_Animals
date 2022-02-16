import { IAnimals } from "./content-interface";

export class AnimalList {
    private _animals: IAnimals[] //private class of animals _ is common naming convention for private items

    constructor() {
        this._animals = []; //initially sets the animals array to be empty

    }

    get() {
        return this._animals;     //returns the empty animal array
    }

    add(newItem: IAnimals): void {  //return void
        this._animals.push(newItem);    //adds newItem of type animal to the empty array
    }

    amount(): number {
        return this._animals.length;    //returns the amount of items in the animals array
    }

    displaycontent(i:number) {  //index i
        let animal = this._animals[i];      //sets animal = to the animal array at index i
        if(this._animals.length > i){
            //returns each value of animal 
        return `<h1>Title:${animal.title}</h1><br>
        <div>Description:${animal.description}</div><br>
        <div>Creator:${animal.creator}</div><br>
        <div><img src= "${animal.imgURL}"></div><br>
        <div>Type:${animal.type}</div><br>`;
        }
        else return "<h2>Oopsie Woopsie you've done a baddie waddie</h2>";
        
    }
}