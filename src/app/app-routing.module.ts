import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  // {path:'' , component:LoginpageComponent},
  {path:'' , component:DateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
