import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'Cupcake', price: 10, description: 'Vanilla flavor' },
    { name: 'Dairy Milk ', price: 120, description: 'Red Velvet flavor' },
    { name: 'Ice Cream', price: 30, description: 'Butterscoch flavor' }
  ];
}
