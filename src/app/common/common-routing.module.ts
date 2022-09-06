import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  // {path:'' , component:PipesComponent},
  {path:'', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
