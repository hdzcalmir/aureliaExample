import { observable } from "aurelia";
import { IProduct } from "./IProduct";

  export class Selected {
    @observable products: IProduct[];

    private styleObject = {
    background: 'red',
    color: 'green'
    }

    isLoading: boolean = true;

    selectedAction: string = 'mask';

    selectedItems: Array<IProduct>;
    order: boolean | string = false;
    reset: boolean | string = false;

    private itemsAddedToCart(): boolean {
      return this.selectedItems.length > 0;
    }

    constructor() {
      this.products = [
        { id: 0, name: 'Motherboard Asus', price: 189,  currency: 'USD', selected: false},
        { id: 1, name: 'Keyboard Logitech', price: 29 ,  currency: 'EUR', selected: false},
        { id: 2, name: 'Mouse Genius', price: 20 ,  currency: 'BAM', selected: false},
        { id: 3, name: 'Mouse Asus' , price: 30,  currency: 'BAM', selected: false},
        { id: 4, name: 'Cooler Master CPU Cooler 1200 socket', price: 18 ,  currency: 'CHF', selected: false},
        { id: 5, name: 'Mouse Genius Model i8' , price: 26,  currency: 'EUR', selected: false},
        { id: 6, name: 'RAM Memory Kingston 4GB DDR4 2666MHz', price: 34 ,  currency: 'USD', selected: false},
      ];
    
      this.selectedItems = new Array<IProduct>();
    
    }
    
    updateProduct(product): void {
      product.selected = !product.selected;
      this.updateCart(product);      
    }

    updateCart(product): void {
      if(product.selected) this.selectedItems.push(product);
      if(product.selected === false) this.removeProductFromCart(this.selectedItems, product.id)
      
    } 

    removeProductFromCart(selectedItems, itemToRemove): any {
      const itemId = selectedItems.findIndex(item => item.id === itemToRemove);
    
      if (itemId > -1) {
        selectedItems.splice(itemId, 1);
      }
    
      return selectedItems;
    }

    buyItems(): void {
      if(this.itemsAddedToCart()) this.order = `You succesfully completed your order for items ${this.selectedItems.map(name => name.name )}!`; this.reset = false;
    } 

    emptyYourCart(): void{

      this.selectedItems = [];
      if(this.itemsAddedToCart() == false) this.reset = 'You emptied your cart!'; this.order = false;
      
    }

  }
  
  