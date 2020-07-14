import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public products =[]
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    console.log('dans ProductListComponent');
    this.products = this.dataSvc.getAllProducts();
    console.log("Products =>", this.products);
  }

}
