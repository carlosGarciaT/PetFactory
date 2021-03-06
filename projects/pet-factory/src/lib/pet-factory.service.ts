import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetFactoryService {
  url: string;

  constructor() {
    this.url = 'https://petstore.swagger.io/v2/';
  }

  // createPet(pet): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const params = JSON.stringify(pet);
  //   return this.http.post(this.url + 'pet', params, { headers: headers });
  // }

  createPet(pet): number {
    let status: number;
    const params = JSON.stringify(pet);
    fetch(this.url + 'pet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: params,
    })
      .then((response) => {
        console.log('response =', response);
        if (response.status === 200) {
          status = 1;
        }
        return response.json();
      })
      .catch((err) => {
        console.error(err);
        status = 2;
      });
    return status;
  }
}
