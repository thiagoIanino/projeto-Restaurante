import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'http://localhost:3001/dishes'

  constructor(private http: HttpClient) {

  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.baseUrl)
  }

}
