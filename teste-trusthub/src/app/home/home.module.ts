import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PainelGestaoComponent } from './paginas/painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './paginas/conta-digital/conta-digital.component';
import { AntecipRecebiveisComponent } from './paginas/antecip-recebiveis/antecip-recebiveis.component';
import { PageTitleModule } from 'app/shared/page-title/page-title.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'painel-gestao',
    component: PainelGestaoComponent,
    data: {
      breadcrumb: 'Painel de Gestão',
      showBreadcrumb: true,
      idMenu: 1
    }
  },
  {
    path: 'conta-digital',
    component: ContaDigitalComponent,
    data: {
      breadcrumb: 'Conta Digital',
      showBreadcrumb: true,
      idMenu: 2
    }
  },
  {
    path: 'antecip-recebiveis',
    component: AntecipRecebiveisComponent,
    data: {
      breadcrumb: 'Antecipação de Recebíveis',
      showBreadcrumb: true,
      idMenu: 3
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    FormsModule,
    NgSelectModule,
    PageTitleModule,
    RouterModule
  ],
  declarations: [
    PainelGestaoComponent,
    ContaDigitalComponent,
    AntecipRecebiveisComponent
  ]
})
export class HomeModule { }
