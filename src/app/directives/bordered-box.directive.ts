import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderedBox]'
})
export class BorderedBoxDirective {

  constructor(private elementRef:ElementRef,private renderer2:Renderer2) { }

  @HostListener("mouseenter")

  public addBorder():void{
    this.renderer2.setStyle(this.elementRef.nativeElement,"border","solid rgb(133,133,133) 3px")
  }

  @HostListener("mouseleave")

  public removeBorder():void{
    this.renderer2.setStyle(this.elementRef.nativeElement,"border","none")
  }
}
