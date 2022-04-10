import { Component, OnInit } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { AnimalServiceService } from '../Services/animal-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  animal?: IAnimals;
  constructor(private route: ActivatedRoute, private animalService: AnimalServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.animalService.getContentItem(this.id).subscribe(
        (c) => {
          this.animal = c;
        });
    });
  }

}
