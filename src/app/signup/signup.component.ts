import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { __values } from 'tslib';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true,
})
export class SignupComponent {

  // userForm:FormGroup; //Creating new instance of the Formgroup class 



      private fb = inject(FormBuilder);
      constructor(
          private _router : Router
      ){}
      
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
        const name = this.userForm.get('full_name')?.value?.replaceAll(' ','-')
        this._router.navigate(['/users/profile',name])
      }
      
    }
}
