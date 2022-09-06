import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateComponent } from './date/date.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { CommonRoutingModule } from './common-routing.module';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [DateComponent, PipesComponent, LoginpageComponent, ParentComponent, ChildComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MaterialExampleModule,
    MatInputModule,
    SocialLoginModule,
    CommonRoutingModule,
    CommonModule,
  ],
  providers: [

  ],
})
export class shareModule {
  constructor(){
    console.log("share module")
  }
}
