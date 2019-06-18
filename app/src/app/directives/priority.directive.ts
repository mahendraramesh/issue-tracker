import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPriority]'
})
export class PriorityDirective implements OnInit{

  @Input('appPriority') 
  priority: string;

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.updateColor();
  }

  updateColor() {
    if(this.priority === "Major") {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
