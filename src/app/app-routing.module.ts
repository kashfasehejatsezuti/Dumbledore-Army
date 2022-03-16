import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'hogwarts', pathMatch: 'full' },

  {path:'hogwarts',
  loadChildren:()=>
  import('./Components/hogwarts/hogwarts.module').then(
    (m)=> m.HogwartsModule
  ),},
  {path:'gryffindor',
  loadChildren:()=>
  import('./Components/gryffindor/gryffindor.module').then(
    (m)=> m.GryffindorModule
  ),},

  {path:'slytherin',
  loadChildren:()=>
  import('./Components/slytherin/slytherin.module').then(
    (m)=> m.SlytherinModule
  ),},


  {path:'hufflepuff',
  loadChildren:()=>
  import('./Components/hufflepuff/hufflepuff.module').then(
    (m)=> m.HufflepuffModule
  ),},

  {path:'ravenclaw',
  loadChildren:()=>
  import('./Components/ravenclaw/ravenclaw.module').then(
    (m)=> m.RavenclawModule
  ),},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
