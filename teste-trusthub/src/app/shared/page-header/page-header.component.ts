import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MockService } from '../services/mock-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() openMenu: boolean;

  @Output() menuToogle = new EventEmitter<boolean>();

  selectedEconomicGroup = 1;
  economicGroups: any[];
  loading = false;
  user: any;
  notifications: any[];
  countNotifications: number;
  userInfoDetail = false;
  notificationDetail = false;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.getEconomicGroups();
    this.getUser();
    this.getCountNotifications();
    this.getNotifications();
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
        err => this.economicGroups = [
          {
            "id": 1,
            "description": "Visão Agregada 1"
          }
        ]
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
        err => this.user = {
          "id": 1,
          "name": "Sandra Oliveira",
          "email": "sandra.oliveira@srm.com.br",
          "phone": "(11) 98752-9844"
        }
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
        err => this.countNotifications = 3
      );
  }

  getNotifications() {
    this.loading = true;
    this.mockService.getNotifications()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        notifications => this.notifications = notifications,
        err => this.notifications = [
          {
            "id": 1,
            "subject": "Teste"
          },
          {
            "id": 2,
            "subject": "Teste"
          },
          {
            "id": 3,
            "subject": "Teste"
          }
        ]
      );
  }

  toogleUserInfoDetail() {
    this.userInfoDetail = !this.userInfoDetail;
    this.notificationDetail = false;
  }
  
  toogleNotificationDetail() {
    this.notificationDetail = !this.notificationDetail;
    this.userInfoDetail = false;
  }
}
