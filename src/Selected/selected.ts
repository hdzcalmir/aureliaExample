export interface IProduct {
    id: number;
    name: string;
  }
  
  export class Selected {
    products: IProduct[] = [
      { id: 0, name: 'Motherboard' },
      { id: 1, name: 'CPU' },
      { id: 2, name: 'Memory' },
    ];
  
    selectedProducts: IProduct[] = [];
  }