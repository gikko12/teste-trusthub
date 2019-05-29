import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class MenuModule { }
