import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  login=new FormControl('rania',[Validators.required,Validators.minLength(6)]);
  pwd=new FormControl("",Validators.required);

  //formcontrol nous permet de controller un seul input par contre formgroup pour un ensemble de input
  RegisterForm= new FormGroup({
    nom : new FormControl('Rania',[Validators.required,Validators.minLength(6)]),
    prenom : new FormControl('',[Validators.required,Validators.minLength(6)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    tel : new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')])
});



  save(){
    console.log(this.login);
  }
  
}
