import { Component, Input, OnInit } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() animal?:IAnimals
  
  constructor() {
    
  }

  ngOnInit(): void {
  
  }

}
