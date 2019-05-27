import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './page-header/page-header.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    PageHeaderModule
  ],
  declarations: [],
  exports: [
    MenuModule,
    PageHeaderModule
  ]
})
export class SharedModule { }
