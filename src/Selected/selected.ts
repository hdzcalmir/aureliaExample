import { observable } from "aurelia";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    currency: string;
    selected: boolean;
  }

  export class Selected {
    @observable products: IProduct[];

    selectedItems: Array<IProduct>;
    order: boolean | string = false;
    reset: boolean | string = false;

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

    productsChanged(o, n) {
      console.log(n);
    }

    attached() {
      console.log(this.products);
      
    }

    updateProduct(product) {
      product.selected = !product.selected;
      this.updateCart(product);      
    }

    removeProductFromCart(selectedItems, itemToRemove) {
      const itemId = selectedItems.findIndex(item => item.id === itemToRemove);
    
      if (itemId > -1) {
        selectedItems.splice(itemId, 1);
      }
    
      return selectedItems;
    }

    updateCart(product) {
      if(product.selected) this.selectedItems.push(product);
      if(product.selected === false) this.removeProductFromCart(this.selectedItems, product.id)
      
    } 

    buyItems() {
      if(this.itemsAddedToCart()) this.order = `You succesfully completed your order for items ${this.selectedItems.map(name => name.name )}!`; this.reset = false;
    } 

    private itemsAddedToCart() {
      return this.selectedItems.length > 0;
    }

    emptyYourCart(){
      
      this.selectedItems = [];
      if(this.itemsAddedToCart() == false) this.reset = 'You emptied your cart!'; this.order = false;
      
    }
  }
  
  