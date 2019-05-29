import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageHeaderModule } from './shared/page-header/page-header.module';
import { MenuModule } from './shared/menu/menu.module';
import { MockService } from './shared/services/mock-service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule', data: { breadcrumb: 'Página Inicial', showBreadcrumb: true } },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MenuModule,
    PageHeaderModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far, fab);
  }
}
