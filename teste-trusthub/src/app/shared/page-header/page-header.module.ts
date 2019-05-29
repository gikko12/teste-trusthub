import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgSelectModule
  ],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
