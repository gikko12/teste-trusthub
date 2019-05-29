import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

export interface BreadCrumb {
  label: string;
  url: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  openMenu = true;

  breadcrumbs$: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        distinctUntilChanged(),
        map(event => this.buildBreadCrumb(this.activatedRoute.root))
      );
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    //If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'Página Inicial';
    const path = route.routeConfig ? route.routeConfig.path : '';
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = [...breadcrumbs];
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data['showBreadcrumb']) {
      newBreadcrumbs.push(breadcrumb);
    }

    if (route.firstChild) {
      //If we are not on our current path yet, 
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

  toogleMenu(openMenu) {
    this.openMenu = openMenu;
  }
}
