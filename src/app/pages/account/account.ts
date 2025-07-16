import { Component, inject } from '@angular/core';
import { AccountHeader } from './account-header/account-header';
import { AccountDataService } from './account-data.service';
import { PerformanceMetrics } from './performance-metrics/performance-metrics';
import { Policies } from './policies/policies';

@Component({
  selector: 'app-account',
  imports: [AccountHeader, PerformanceMetrics, Policies],
  template: `
    <div class="account">
      <app-account-header [header]="accountData.header()!"></app-account-header>
      <app-performance-metrics
        [metrics]="accountData.performanceMetrics()!"
      ></app-performance-metrics>
      <app-policies [policies]="accountData.policies()!"></app-policies>
    </div>
  `,
  styleUrl: './account.scss',
})
export class Account {
  accountData = inject(AccountDataService);
}
