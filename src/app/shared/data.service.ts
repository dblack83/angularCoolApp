import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'lorem egg',
      price: 1,
    },
    {
      id: 2,
      name: 'Coca cola',
      category: 'Drink',
      description: 'lorem drink',
      price: 1,
    },
    {
      id: 3,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'lorem cookie',
      price: 1,
    },
  ];
  constructor() { }

  getAllProducts(): Object[]{
    return this.products;
  }

  getProductById(id) {
    
   return this.products.filter(product => product.id == id);
    }
}
