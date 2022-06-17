import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  constructor() { }

  ngOnInit() {}

}
