import { customAttribute, INode } from 'aurelia';
  
@customAttribute({ name: 'custom-square', aliases: ['customify', 'custombox'] }) 
export class RedSquareCustomAttribute {
  constructor(@INode private element: HTMLElement){
      this.element.style.width = this.element.style.height = '100px';
      this.element.style.backgroundColor = 'red';
  }
}