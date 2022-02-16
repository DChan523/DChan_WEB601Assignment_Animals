import { Component, OnInit } from '@angular/core';
import { AnimalList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  animoo:AnimalList   //define variable called animoo and make it of the class type
  
  constructor() {
    
    this.animoo = new AnimalList;   //animoo is a new animallist
    
    this.animoo.add({ //adds new animal to the array
      id:1,
      title:"Koala",
      description:"Dumb tree bear",
      creator:"god",
      imgURL:"https://c.files.bbci.co.uk/100E0/production/_114306756_gettyimages-482829557.jpg",
      type:"bear",
      tags:["koala","eucalyptus","small brain"]
    });  

    this.animoo.add({ //adds new animal to the array
      id:2,
      title:"dog",
      description:"Doggo",
      creator:"god",
      imgURL:"https://i1.sndcdn.com/artworks-000810672895-5vv94q-t500x500.jpg",
      type:"dog",
      tags:["dogs","Doge","good boys"]
    });

    this.animoo.add({ //adds new animal to the array
      id:3,
      title:"lemur",
      description:"likes garbonzo beans",
      creator:"god",
      imgURL:"https://scdn.nflximg.net/ipl/10973/8ca4580aaa23952b2723aa7e726ed4d34788888c.jpg",
      type:"lemur",
      tags:["lemur","Zoboomafoo","beans"]
    });
  }

  ngOnInit(): void {
  
  }

}
