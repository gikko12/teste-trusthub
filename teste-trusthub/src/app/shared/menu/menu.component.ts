import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
        err => console.log(err)
      );
    this.filter.next('');
  }

  getMenu(text): Observable<any> {
    this.loading = true;
    return this.mockService.getMenu(text)
      .pipe(
        finalize(() => this.loading = false),
        map(
          menu => this.menu = menu,
          err => console.log(err)
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
