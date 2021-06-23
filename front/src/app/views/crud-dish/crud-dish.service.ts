import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../home/home.model';
import {MatSnackBar} from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})
export class CrudDishService {

  constructor(private http:HttpClient,private snacBar: MatSnackBar) { }

  baseUrl = 'http://localhost:3001/dishes'

  create(prato:Dish): Observable<Dish>{
    return this.http.post<Dish>(this.baseUrl,prato)
  }
  delete(id:number|undefined): Observable<Dish>{
    return this.http.delete<Dish>(`${this.baseUrl}/${id}`)
  }
  alterar(prato:Dish): Observable<Dish>{
    return this.http.put<Dish>(`${this.baseUrl}/${prato.id}`,prato)
  }

  showMessage(msg:string,isError:boolean):void{
    this.snacBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:'top',
      panelClass:isError ? ['msg-error'] : ['msg-success']
    })
     }
}
