import { Component, inject } from '@angular/core';
import { AccountHeader } from './account-header/account-header';
import { AccountDataService } from './account-data.service';
import { PerformanceMetrics } from './performance-metrics/performance-metrics';
import { Policies } from './policies/policies';
import { AccountStatus } from './account-status/account-status';
import { Winnability } from './winnability/winnability';

@Component({
  selector: 'app-account',
  imports: [
    AccountHeader,
    PerformanceMetrics,
    Policies,
    AccountStatus,
    Winnability,
  ],
  template: `
    <div class="account">
      <app-account-header [header]="accountData.header()!"></app-account-header>
      <app-performance-metrics
        [metrics]="accountData.performanceMetrics()!"
      ></app-performance-metrics>
      <app-policies [policies]="accountData.policies()!"></app-policies>
      <app-account-status
        [status]="accountData.status()!"
        [compliance]="accountData.compliance()!"
      >
      </app-account-status>
      <app-winnability
        [winnability]="accountData.winnability()!"
      ></app-winnability>
    </div>
  `,
  styleUrl: './account.scss',
})
export class Account {
  accountData = inject(AccountDataService);
}
