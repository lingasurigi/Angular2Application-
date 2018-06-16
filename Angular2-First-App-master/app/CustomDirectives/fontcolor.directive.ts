import { Directive ,ElementRef, Renderer } from '@angular/core'

@Directive({ selector: '[divFontColor]' })

export class FontColorDirective
{
    constructor(elem:ElementRef, renderer: Renderer){
        renderer.setElementStyle(elem.nativeElement,'color', '#EEBA33');
    }
}
