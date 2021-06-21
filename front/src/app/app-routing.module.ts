import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
