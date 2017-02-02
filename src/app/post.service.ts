import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  post(data) {
    console.log('Data: ', data);
//  return this.http.post('https://hh1.herokuapp.com/postEmail', data);  // heroku backend
    return this.http.post('http://localhost:8081/postEmail', data);  // local backend

  }
}
