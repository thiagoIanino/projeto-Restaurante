import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Dish } from '../home/home.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }


  getDishById(id:string | null): Observable<Dish>{
   const url = `http://localhost:3001/dishes/${id}`
    return this.http.get<Dish>(url)
  }
}
