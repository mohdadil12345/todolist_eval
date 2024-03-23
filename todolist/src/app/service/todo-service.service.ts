import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor( private http : HttpClient) { }

  url = "http://localhost:3000/todos"

// post

postInputData(data : any) {
  return this.http.post(this.url,  data)
}




}
