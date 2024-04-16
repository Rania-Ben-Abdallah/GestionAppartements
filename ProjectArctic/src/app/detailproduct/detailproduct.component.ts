import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent {
  id!:number
  constructor(private Act:ActivatedRoute){}
  
  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
  }

}
