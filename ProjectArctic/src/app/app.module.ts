import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormComponent } from './form/form.component';
import { FormapartmentComponent } from './formapartment/formapartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ResidenceComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailproductComponent,
    FormresidenceComponent,
    FormapartmentComponent,
    DetailAppartmentComponent,
    ApartmentsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
