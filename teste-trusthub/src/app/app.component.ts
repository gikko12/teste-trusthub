import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  openMenu = true;

  toogleMenu(openMenu) {
    this.openMenu = openMenu;
    window.dispatchEvent(new Event('resize'));
  }
}
