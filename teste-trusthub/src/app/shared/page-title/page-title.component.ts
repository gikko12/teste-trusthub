import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../services/mock-service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  menuItem: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mockService: MockService
  ) {
    if (this.activatedRoute.routeConfig && this.activatedRoute.routeConfig.data && this.activatedRoute.routeConfig.data['idMenu']) {
      this.mockService.getMenuItem(this.activatedRoute.routeConfig.data['idMenu'])
        .subscribe(
          menuItem => this.menuItem = menuItem,
          err => console.log(err)
        );
    }
  }

  ngOnInit() {
  }
}
