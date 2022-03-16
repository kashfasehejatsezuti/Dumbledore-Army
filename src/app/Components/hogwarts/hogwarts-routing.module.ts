import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogwartsComponent } from './hogwarts.component';

const routes: Routes = [
  {
    path:'',
    component:HogwartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HogwartsRoutingModule { }
