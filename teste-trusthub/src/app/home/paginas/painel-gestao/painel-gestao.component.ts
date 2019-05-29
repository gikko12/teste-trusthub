import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockService } from 'app/shared/services/mock-service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-painel-gestao',
  templateUrl: './painel-gestao.component.html',
  styleUrls: ['./painel-gestao.component.scss']
})
export class PainelGestaoComponent implements OnInit {
  selectedProduct = 1;
  products: any[];
  actions: any[];
  countCancelledReceipts = 0;
  countDigitalSignatures = 0;
  loading = false;

  constructor(
    private mockService: MockService
  ) { }

  ngOnInit() {
    this.getActions();
    this.getProducts();
    this.getCountCancelledReceipts();
    this.getCountDigitalSignatures();
  }

  getActions() {
    this.loading = true;
    this.mockService.getActions()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        actions => this.actions = actions,
        err => this.actions = [
          {
            "id": 1,
            "description": "Visualizar"
          },
          {
            "id": 2,
            "description": "Deletar"
          }
        ]
      );
  }

  getProducts() {
    this.loading = true;
    this.mockService.getProducts()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        products => this.products = products,
        err => this.products = [
          {
            "id": 1,
            "description": "Todos"
          }
        ]
      );
  }

  getCountCancelledReceipts() {
    this.loading = true;
    this.mockService.getCountCancelledReceipts()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        countCancelledReceipts => this.countCancelledReceipts = countCancelledReceipts,
        err => this.countCancelledReceipts = 5
      );
  }

  getCountDigitalSignatures() {
    this.loading = true;
    this.mockService.getCountDigitalSignatures()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        countDigitalSignatures => this.countDigitalSignatures = countDigitalSignatures,
        err => this.countDigitalSignatures = 8
      );
  }
}
