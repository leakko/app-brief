import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  WCForm: FormGroup = new FormGroup({
    apiKey: new FormControl(''),
    apiSecret: new FormControl(''),
    url: new FormControl('')
  })

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onSubmit(e) {
    e.preventDefault();
    
  }

}
