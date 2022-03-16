import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RavenclawComponent } from './ravenclaw.component';
import { CommonModule } from '@angular/common'

const routes: Routes = [

  {
    path:'',
    component:RavenclawComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RavenclawRoutingModule { }
