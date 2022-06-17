import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WcApiService } from 'src/app/services/wc/wc-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  WCForm: FormGroup = new FormGroup({
    apiKey: new FormControl(''),
    apiSecret: new FormControl(''),
    url: new FormControl(''),
  });
  products: any;
  errorGettingProducts: boolean = false;

  constructor(
    public authService: AuthService,
    private wcService: WcApiService
  ) {}

  ngOnInit() {}

  onSubmit(e) {
    e.preventDefault();
    this.wcService.getProducts(this.WCForm.value.url, this.WCForm.value.apiKey, this.WCForm.value.apiSecret)
    .toPromise()
    .then(products => {
      this.products = products;
      this.errorGettingProducts = false;
      console.log(this.products);
    })
    .catch(error => {
      this.errorGettingProducts = true;
    })
  }
}
