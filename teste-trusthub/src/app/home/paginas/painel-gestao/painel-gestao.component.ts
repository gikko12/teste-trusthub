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
        err => console.log(err)
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
        err => console.log(err)
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
        err => console.log(err)
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
        err => console.log(err)
      );
  }
}
