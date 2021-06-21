import { Component, OnInit } from '@angular/core';
import { Dish } from './home.model';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

 
dishes:Dish[] = [{name:'',description:'',price:'',url:'',ingredients:""}]

  constructor(private homeService:HomeService) { }

 listarPratos():void{
    this.homeService.getDishes().subscribe(response=>{
      this.dishes = response
      console.log(this.dishes)
    })
  }

  ngOnInit(): void {
    this.listarPratos()
  }

}
