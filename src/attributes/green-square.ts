import { INode } from 'aurelia';
  
export class GreenSquareCustomAttribute {
  constructor(@INode private element: HTMLElement){
    //   this.element.style.width  = '20px';
      this.element.style.height  = '200px';
      this.element.style.backgroundColor = 'green';
  }
}