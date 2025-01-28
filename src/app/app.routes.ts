import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path : '', component : HomeComponent, title: 'Home' },
    {path : 'Signup', component : SignupComponent, title: 'SignUp' },
    {path : 'Login', component : LoginComponent, title: 'Login' },
    {path : '**', component : PageNotFoundComponent, title: '404|Page Not Found' }
];
