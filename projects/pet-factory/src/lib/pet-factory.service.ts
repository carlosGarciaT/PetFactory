import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetFactoryService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://petstore.swagger.io/v2/';
  }

  createPet(pet): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = JSON.stringify(pet);
    return this.http.post(this.url + 'pet', params, { headers: headers });
  }
}
