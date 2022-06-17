import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(e) {
    e.preventDefault();
    this.authService.SignIn(this.loginForm.value.email, this.loginForm.value.password);
  }

}
