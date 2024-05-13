import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginModel } from '../login';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {
  public login : LoginModel;
  cofirmPass: any;
  constructor(){
    this.login = new LoginModel();
  }
 
    onSubmit(form : NgForm){
   
      console.log(this.login)
    }


}

@NgModule({
  declarations: [FormTestComponent],
  imports: [CommonModule, FormsModule, ], 
  exports: [FormTestComponent]
})
export class FormTestModule { }



