import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MockService } from '../services/mock-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Output() menuToogle = new EventEmitter<boolean>();
  
  openMenu = true;

  selectedEconomicGroup = 1;
  economicGroups: any[];
  loading = false;
  user: any;
  countNotifications: number;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.getEconomicGroups();
    this.getUser();
    this.getCountNotifications();
  }

  toogleMenu() {
    this.openMenu = !this.openMenu;
    this.menuToogle.emit(this.openMenu);
  }

  getEconomicGroups() {
    this.loading = true;
    this.mockService.getEconomicGroups()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        economicGroups => this.economicGroups = economicGroups,
        err => console.log(err)
      );
  }

  getUser() {
    this.loading = true;
    this.mockService.getUser(1)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        user => this.user = user,
        err => console.log(err)
      );
  }

  getCountNotifications() {
    this.loading = true;
    this.mockService.getCountNotifications()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        count => this.countNotifications = count,
        err => console.log(err)
      );
  }
}
