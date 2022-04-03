import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IAnimals } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
  @Output() updateAnimalEvent: EventEmitter<IAnimals> = new EventEmitter<IAnimals>();
 
  newAnimal?:IAnimals; //new animals!!! of whateever my interface is now
  constructor(public dialog:MatDialog,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogComponent)
    }

  openSnackBar(message:string,action:string){
    this._snackBar.open(message,action);
  }


}
