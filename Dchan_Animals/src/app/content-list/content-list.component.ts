import { Component, OnInit } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  animells:IAnimals[]

  constructor() {
    this.animells = [{
      id:1,
      title:"ayeaye",
      description:"I cant hear youuuuuu",
      creator:"jesus",
      imgURL:"https://cdn.discordapp.com/attachments/369194512234446848/943626877396983848/xw0fkzv1r34yduw1lhkm.png",
      type:"primate",
      tags:["ayeaye captain","wtf is this shit","cursed lemur"]
    },
    {
      id:2,
      title:"kiwi",
      description:"tasty fruit...chicken",
      creator:"Sir Isaac Newton",
      imgURL:"https://cdn.discordapp.com/attachments/369194512234446848/943627489866027008/tmp-name-2-31487-1502920343-3_dblbig.jpg",
      type:"fruit",
      tags:["round","green","discovered gravity"]
    },
    {
      id:3,
      title:"Goblin Shark",
      description:"*evil screech",
      creator:"Louis XIV of France",
      imgURL:"https://cdn.discordapp.com/attachments/369194512234446848/943628251320946708/mitsukurina-owstoni-goblin-shark-registration-no-a-24744-180056-large_2_copy.jpg",
      type:"fish?",
      tags:["shark","Goblin slayer"]
    },
    {
      id:4,
      title:"???????????",
      description:"???????????",
      creator:"George W. Bush",
      imgURL:"https://cdn.discordapp.com/attachments/369194512234446848/943629570228232262/latest.png",
      type:"??????????",
      tags:["??????","poop"]
    },
    {
      id:5,
      title:"Leonard",
      description:"One Hungry Boi",
      creator:"Thomas Jefferson",
      imgURL:"https://cdn.discordapp.com/attachments/369194512234446848/943629797580476486/latest.png",
      type:"Hungry Boi",
      tags:["Hungry","#onadiet"]
    },
    {
      id:6,
      title:"Blue Devil",
      description:"Gotta go fast",
      creator:"Wolfgang Amadeus mozart",
      imgURL:"https://2.bp.blogspot.com/-90OMNRv53r4/XBIfQuaAz_I/AAAAAAAAiAE/D8YOi38r1PUkCXDu5h1yAM4WNI8Z0aRwQCLcBGAs/s1600/live%2Bin%2Bdarkness.jpg",
      type:"Speedster",
      tags:["Sanic speed","Sanic","I am speed"]
    },
    {
      id:7,
      title:"Blue Devil",
      description:"Gotta go fast",
      creator:"Wolfgang Amadeus mozart",
      imgURL:"https://2.bp.blogspot.com/-90OMNRv53r4/XBIfQuaAz_I/AAAAAAAAiAE/D8YOi38r1PUkCXDu5h1yAM4WNI8Z0aRwQCLcBGAs/s1600/live%2Bin%2Bdarkness.jpg",
      tags:["Sanic speed","Sanic","I am speed"]
    }];
  }

  ngOnInit(): void {
  }

}
