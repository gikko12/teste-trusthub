import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuFilter: string;
  menu: any[];
  loading = false;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.loading = true;
    this.mockService.getMenu(this.menuFilter)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        menu => this.menu = menu,
        err => console.log(err)
      )
  }
}
