import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {
  id!:number
  product!: Product
  constructor(private Act:ActivatedRoute,private ps:ProductService,private cons:ConsumerProductService){}

  
  
  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    //this.product=this.ps.listProduct.find(p=>p.id==this.id) as Product
    this.cons.getProductById(this.id).subscribe(data=>this.product=data)
  }

}
