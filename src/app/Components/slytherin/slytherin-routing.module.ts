import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlytherinComponent } from './slytherin.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'',
    component:SlytherinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlytherinRoutingModule { }
