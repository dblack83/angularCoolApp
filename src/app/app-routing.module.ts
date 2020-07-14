import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductListComponent },
  {path: 'product/:id', component: DetailsProductComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
