import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../home/home.model';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  constructor(private dishService:DishService, private route:ActivatedRoute) { }

  dish: Dish = {name:'',description:'',price:'',url:'',ingredients:''}

getDish():void{
const id = this.route.snapshot.paramMap.get('id')

this.dishService.getDishById(id).subscribe(response =>{
  this.dish = response
  console.log(this.dish)
})
}

  ngOnInit(): void {
    this.getDish()
  }

}
