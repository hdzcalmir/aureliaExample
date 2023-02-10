export interface IList {
    id: number;
    username: string;
    email: string;
  }
  
  export class List {
    products: IList[] = [
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' },
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' },
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' },
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' },
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' },
      { id: 0, username: 'Motherboard', email: 'test@gmail.com' }
    ];
  
  }