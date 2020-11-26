import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetFactoryService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://petstore.swagger.io/v2/pet';
  }

  createPet(pet): void{
    let params = JSON.stringify(pet);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post(this.url, params, {headers: headers});
  }
}
