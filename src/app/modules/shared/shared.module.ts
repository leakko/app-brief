import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NgxPaginationModule
  ],
  exports: [
    ReactiveFormsModule,
    IonicModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
