import { bindable, INode } from 'aurelia';
  
export class PinkSquareCustomAttribute {
  @bindable() private value;
  
  constructor(@INode private element: HTMLElement){
      this.element.style.width = this.element.style.height = '100px';
      this.element.style.backgroundColor = 'pink';
  }
  
  bound() {
      this.element.style.backgroundColor = this.value;
  }
  
  valueChanged(newValue: string, oldValue: string){
      this.element.style.backgroundColor = newValue;
  }
}