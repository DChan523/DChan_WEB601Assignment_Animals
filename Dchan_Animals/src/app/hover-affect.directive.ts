import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() eggs?:string;    //i still have no clue what @Input does

  constructor(private elm:ElementRef){
      elm.nativeElement.style.cursor = "wait";
  }
//ask alex for help this stuff only half makes sense its kinda like event listeners but ugly
  ngOnInit():void{}
  @HostListener('mouseenter')potato(btn:any){
    this.highlightFunction(this.eggs);
  }
  @HostListener('mouseleave')tomato(btn:any){
    this.remove(this.eggs);
  }
  private remove(anotherParameter?:string):void{
    this.elm.nativeElement.style.fontWeight = 'normal';
    this.elm.nativeElement.style.textDecoration = 'none';
  }
  private highlightFunction(someParameter?: string): void {
    this.elm.nativeElement.style.fontWeight = 'bold';
    this.elm.nativeElement.style.textDecoration = 'underline';
  }

  
}
