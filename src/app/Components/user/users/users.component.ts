import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(
    private _auth:AuthService
  ){}
  users:any = []
  ngOnInit(): void{
      // this.users = this._auth.users
      this._auth.fetchhUsers().subscribe({
        next:(res)=>{
          console.log(res);
          this.users = res;
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }
}
