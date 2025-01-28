import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  day = 'Tuesday';
  condition = false;

  products =[
      {
        id: 1,
        name: "Tootpaste",
        price : 700,
        available:true
      },
      {
        id: 1,
        name: "Tootpaste",
        price : 700,
        available:true
      },
      {
        id: 2,
        name: "Tootpaste",
        price : 7000,
        available:false
      },
      {
        id: 3,
        name: "T-shirt",
        price : 1000
      },
      {
        id: 4,
        name: "Shoe polish",
        price : 2900,
        available: false
      },
      {
        id: 5,
        name: "Belt",
        price : 2000,
        available: true
      }
    ]
cart:any =[]
addToCart(product:any){
  this.cart.push(product)
  console.log(this.cart);
}




condition1 = false;
condition2 = true;


}