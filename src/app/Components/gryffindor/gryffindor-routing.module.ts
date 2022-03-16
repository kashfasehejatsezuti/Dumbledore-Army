import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './gryffindor.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component:GryffindorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GryffindorRoutingModule { }
