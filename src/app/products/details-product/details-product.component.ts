import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  public product: any = {}

  constructor(
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    console.log('product--->', this.product);
  }

  back(){
    console.log("dans la methode back");
    this.router.navigate(['']);
  }

  onGoBack(): void{
    this.location.back();
  }

}
