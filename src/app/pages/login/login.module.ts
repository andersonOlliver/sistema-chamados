import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {TabViewModule} from 'primeng/tabview';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    TabViewModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
