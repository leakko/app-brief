import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WcApiService {
  constructor(private http: HttpClient) {}
  
  getProducts(url: string, key: string, password: string) {
    url = url + '/products';
    const httpOptions: any = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(`${key}:${password}`)
      })
    }
    return this.http.get(url, httpOptions)
  }
}
