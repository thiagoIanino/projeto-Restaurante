import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDishComponent } from './views/crud-dish/crud-dish.component';
import { DishComponent } from './views/dish/dish.component';
import { HomeComponent } from './views/home/home.component';
import { QuemComponent } from './views/quem/quem.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'quem-somos',
    component: QuemComponent
  }
  ,{
    path:'dishes/:id',
    component: DishComponent
  },
  {
    path:"crud-dishes",
    component: CrudDishComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
