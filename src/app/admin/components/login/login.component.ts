import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import '../../../services/login-animation.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string="";
  password: string="";

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(){
    console.log(`email: ${this.email} password: ${this.password}`)
    alert(`Email: ${this.email} Password: ${this.password}`)
  }

}
