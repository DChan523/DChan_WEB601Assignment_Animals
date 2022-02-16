class AnimalList {
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
        //returns each value of animal 
        return `<div>${animal.title}</div>
                <div>${animal.description}</div>
                <div>${animal.creator}</div>
                <div><img src= "${animal.imgURL}"></div>
                <div>${animal.type}</div>`;
    }
}