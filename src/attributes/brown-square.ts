import { INode } from 'aurelia';

export class BrownSquareCustomAttribute {
  private value;
  
  constructor(@INode private element: HTMLElement){
      this.element.style.width = this.element.style.height = '100px';
      this.element.style.backgroundColor = 'brown';
  }
  
  bind() {
      this.element.style.backgroundColor = this.value;
  }
}