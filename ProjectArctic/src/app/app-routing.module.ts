import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { FormresidenceComponent } from './formresidence/formresidence.component';
import { FormapartmentComponent } from './formapartment/formapartment.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'detail/:id', component: DetailproductComponent },
  { path: 'residence', component: ResidenceComponent },
  { path:'addResidence',component:FormresidenceComponent},
  { path:'residence/:id',component:ApartmentsComponent},
  { path:'addApartment',component:FormapartmentComponent},
  { path: 'addApartment/:id', component: FormapartmentComponent},
  { path: 'apartmentDetails/:id', component: DetailAppartmentComponent }, 
  { path: 'detail/:id', component: DetailAppartmentComponent },
  { path: 'login', component: FormComponent },

  { path: '**', component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
