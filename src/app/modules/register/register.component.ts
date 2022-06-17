import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSubmit(e) {
    e.preventDefault();
    this.authService.SignUp(this.registerForm.value.email, this.registerForm.value.password);
  }

}
