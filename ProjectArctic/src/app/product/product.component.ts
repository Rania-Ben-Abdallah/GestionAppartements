import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  prix!:number;
  listProduct: Product[]=[
    {id:1,title:'product1',price:1500,quantity:10,like:0},
    {id:2,title:'product2',price:1000,quantity:10,like:0},
    {id:3,title:'product3',price:2000,quantity:10,like:0}
  ]

  increment(id:number){
    //this.listProduct[id].like++ ;
   //this.listProduct.find(p=>p.id==id)!.like++ ;
  }

  //ou bien 
  increment2(p:Product){
    p.like++ ;
  }
  buy(i:number){
    this.listProduct[i].quantity-- ; }


}
