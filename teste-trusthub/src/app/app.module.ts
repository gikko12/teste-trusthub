import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageHeaderModule } from './shared/page-header/page-header.module';
import { MenuModule } from './shared/menu/menu.module';
import { MockService } from './shared/services/mock-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
export class AppModule { }
