import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './formapartment.component.html',
  styleUrls: ['./formapartment.component.css'],
})
export class FormapartmentComponent  {
  id!: string; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.apartForm.patchValue({
      residence: this.id
    });
  }

  apartForm= new FormGroup({
    appartNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    floorNum: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    surface: new FormControl('', [Validators.required]),
    terrace: new FormControl('', [Validators.required]),
    surfaceTerrace: new FormControl(''),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    residence: new FormControl('',[Validators.required])
  });

  test(){
    console.log(this.apartForm);
  }
}
