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
    apiKey: new FormControl('ck_9a00efd5a41665b9f6672cd9c49b1d06ed056020'),
    apiSecret: new FormControl('cs_118856955e2e9913f717267eba02a70ecc3b4d56'),
    url: new FormControl('https://marcos.betademo.es/wp-json/wc/v3'),
  });
  products: any;
  errorGettingProducts: boolean = false;
  search = new FormControl('');
  originalProducts: any;
  pages: number;

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
      this.originalProducts = this.products;
      this.errorGettingProducts = false;
    })
    .catch(error => {
      this.errorGettingProducts = true;
    })
  }

  onSearch() {
    if(this.products) {
      if(this.search.value.length > 0) {
        this.products = this.products.filter(product => {
          return product.name.toUpperCase().includes(this.search.value.toUpperCase());
        })
      } else {
        this.products = this.originalProducts;
      }
    }
  }

  onReset() {
    this.products = this.originalProducts;
    this.search.reset();
  }
}

