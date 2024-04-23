import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  prix!:number
  listProduct!: Product[]
  alert!: number

  constructor(private Cl:CalculService, private cons:ConsumerProductService){}

  ngOnInit(): void {
    this.cons.getProduct().subscribe(
      data=>this.listProduct=data
    )
    this.alert=this.Cl.stat(this.listProduct,'quantity',0)
  }


  increment(id:number){
    //this.listProduct[id].like++ ;
   //this.listProduct.find(p=>p.id==id)!.like++ ;
  }

  //ou bien 
  increment2(p:Product){
    p.like++ ;
  }
  buy(i:number){
    this.listProduct[i].quantity-- ; 
  }


  
  }
  

