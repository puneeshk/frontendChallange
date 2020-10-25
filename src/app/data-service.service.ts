import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  baseURL = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getData()
  {
    return this.http.get('http://localhost:8080/enrollees');
  }

  postData(id : string, body : any)
  {
    const argument = {
      "active": body.active,
      "name": body.name,
      "dateOfBirth": body.dateOfBirth
    }

    return this.http.put('http://localhost:8080/enrollees/'+id, JSON.stringify(argument))
  }
}
