import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
