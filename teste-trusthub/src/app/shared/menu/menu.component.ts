import { Component, OnInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { MockService } from '../services/mock-service';
import { finalize, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() openMenu: boolean;

  @Output() menuToogle = new EventEmitter<boolean>();
  
  text: string;
  filter = new Subject<string>();
  subscription: Subscription;
  menu: any[];
  loading = false;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.subscription = this.filter
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(text => {
          return this.getMenu(text)
        }),
      )
      .subscribe(
        () => { },
        err => this.menu = [
          {
            "id": 1,
            "order": 1,
            "icon": "globe",
            "description": "Painel de Gestão",
            "route": "/home/painel-gestao"
          },
          {
            "id": 2,
            "order": 2,
            "icon": "at",
            "description": "Conta Digital",
            "route": "/home/conta-digital"
          },
          {
            "id": 3,
            "order": 3,
            "icon": "chart-bar",
            "description": "Ant. de Recebíveis",
            "route": "/home/antecip-recebiveis"
          }
        ]
      );
    this.filter.next('');
  }

  toogleMenu() {
    this.menuToogle.emit(!this.openMenu);
  }

  getMenu(text): Observable<any> {
    this.loading = true;
    return this.mockService.getMenu(text)
      .pipe(
        finalize(() => this.loading = false),
        map(
          menu => this.menu = menu,
          err => this.menu = [
            {
              "id": 1,
              "order": 1,
              "icon": "globe",
              "description": "Painel de Gestão",
              "route": "/home/painel-gestao"
            },
            {
              "id": 2,
              "order": 2,
              "icon": "at",
              "description": "Conta Digital",
              "route": "/home/conta-digital"
            },
            {
              "id": 3,
              "order": 3,
              "icon": "chart-bar",
              "description": "Ant. de Recebíveis",
              "route": "/home/antecip-recebiveis"
            }
          ]
        )
      )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  changeFilter(text: string) {
    this.filter.next(text);
  }
}
