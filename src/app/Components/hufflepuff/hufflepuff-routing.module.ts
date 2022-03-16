import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HufflepuffComponent } from './hufflepuff.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component:HufflepuffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HufflepuffRoutingModule { }
