import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PainelGestaoComponent } from './paginas/painel-gestao/painel-gestao.component';
import { ContaDigitalComponent } from './paginas/conta-digital/conta-digital.component';
import { AntecipRecebiveisComponent } from './paginas/antecip-recebiveis/antecip-recebiveis.component';

const appRoutes: Routes = [
  {
    path: 'painel-gestao',
    component: PainelGestaoComponent,
    data: {
      breadcrumb: 'Painel de Gestão',
      showBreadcrumb: true
    }
  },
  {
    path: 'conta-digital',
    component: ContaDigitalComponent,
    data: {
      breadcrumb: 'Conta Digital',
      showBreadcrumb: true
    }
  },
  {
    path: 'antecip-recebiveis',
    component: AntecipRecebiveisComponent,
    data: {
      breadcrumb: 'Antecipação de Recebíveis',
      showBreadcrumb: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  declarations: [
    PainelGestaoComponent,
    ContaDigitalComponent,
    AntecipRecebiveisComponent
  ]
})
export class HomeModule { }
