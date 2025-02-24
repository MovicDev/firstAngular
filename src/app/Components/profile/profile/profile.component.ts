import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
// Activated Route
constructor(
  private _active: ActivatedRoute,
  private _auth:AuthService,
){}

  username:any='';
  users:any = [];

    ngOnInit(): void{
      // this._active.params.subscribe((param)=>{
      //   this.username = param['name'].replaceAll('- ',' ')
      // })
      // this.username = this._auth.username
      // this.users = this._auth.users;
      this._auth.fetchhUsers2().subscribe({
        next:(res)=>{
          console.log(res);
          this.users = res;
        },
        error:(err)=>{
          console.log(err);
        }
      })
      
    }
    changeName(name:string){
      this._auth.changeUsername(name)
    }
    
}
