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
          err => {
            switch (this.activatedRoute.routeConfig.data['idMenu']) {
              case 1:
                this.menuItem = {
                  "id": 1,
                  "order": 1,
                  "icon": "globe",
                  "description": "Painel de Gestão",
                  "route": "/home/painel-gestao"
                };
                break;
              case 2:
                  this.menuItem = {
                    "id": 2,
                    "order": 2,
                    "icon": "at",
                    "description": "Conta Digital",
                    "route": "/home/conta-digital"
                  };
                break;
              case 3:
                  this.menuItem = {
                    "id": 3,
                    "order": 3,
                    "icon": "chart-bar",
                    "description": "Ant. de Recebíveis",
                    "route": "/home/antecip-recebiveis"
                  };
                break;
            }
          }
        );
    }
  }

  ngOnInit() {
  }
}
