import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[ui-ripple]'
})
export class UiRippleDirective {
  constructor( element: ElementRef) {
    /* Assign click event to the element */
    element.nativeElement.addEventListener('click', this.createRipple.bind(this));
  }
  private createRipple(e:any){
    console.log(e)
    /* Take point responding to the position of our clicks for the effect*/
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;

    width >= height ? (height = width) : (width = height);

    /* Create the span to overhead the component*/
    let ripple = document.createElement(`span`);

    ripple.setAttribute('style', `
        height: ${height}px !important;
        left: ${e.pageX - e.target.offsetLeft - width / 2}px !important;
        top: ${e.pageY - e.target.offsetTop - height / 2}px !important;
        width: ${width}px !important;
    `);
    /* Assign class style to the created new element */
    ripple.classList.add(`ripple`);
    /* Add new element to the clicked element */
    e.target.appendChild(ripple);
    // Remove element after effect takes effect
    setTimeout(() => e.target.removeChild(ripple), 500);
  }
}
