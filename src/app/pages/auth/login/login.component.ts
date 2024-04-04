import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private formBuilder:FormBuilder,
    ){}
    
  loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

  showPass:boolean = false;
  
  onSubmit(){
    console.log("Udah Disubmit Blok");
  }
}
