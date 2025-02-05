import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
})
export class SignupComponent {

  // userForm:FormGroup; //Creating new instance of the Formgroup class 

      // constructor(
      //   private _fb: FormBuilder,
      //   private _formGroup: FormGroup
      // ){
      //  this.userForm = this._fb.group({
      //     'full_name' : ['', [Validators.required]],
      //     'email':['', [Validators.required,Validators.email]],
      //     'phone_number': ['', [Validators.required, Validators.minLength(11)]],
      //     'password': ['', [Validators.required,Validators.minLength(8)]]
      //   })
      // }

      private fb = inject(FormBuilder)

      userForm = this.fb.group({
            'full_name' : ['', [Validators.required]],
            'email':['', [Validators.required,Validators.email]],
            'phone_number': ['', [Validators.required, Validators.minLength(11)]],
            'password': ['', [Validators.required,Validators.minLength(8)]]
          })

    full_name = '';
    email = '';
    phone_number = '';
    password = '';

    // ngOnInit (){
    //   this.users=JSON.parse(localStorage['users']); 
    // }
    users:any = [];

    register(){
      // const user = {full_name: this.full_name, email: this.email, phone_number: this.phone_number, password: this.password}     
      // console.log(user);
      // this.users.push(user);
      // localStorage.setItem('users',JSON.stringify(this.users));
      // console.log("user saved");

      if (this.userForm.invalid) {
        console.log(this.userForm.get('full_nmae')?.errors);
        
      } else {
        console.log('Form is valid');
        
      }
      
    }
}
