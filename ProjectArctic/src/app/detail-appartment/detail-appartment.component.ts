import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-appartment',
  templateUrl: './detail-appartment.component.html',
  styleUrls: ['./detail-appartment.component.css']
})
export class DetailAppartmentComponent implements OnInit {
  id: string= "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
}

