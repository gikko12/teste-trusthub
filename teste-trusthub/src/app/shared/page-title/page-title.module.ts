import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
