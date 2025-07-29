import { Account } from './../account';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-account-status',
  styleUrl: './account-status.scss',
  template: `
    <section class="account-status">
      <!-- Status Steps -->
      @if (status().length) {
      <div class="account-status__section">
        <h2 class="account-status__title">Account Status</h2>

        <ul class="account-status__steps">
          @for (step of status(); track step) {
          <li class="account-status__step">
            <span class="account-status__label">{{ step }}</span>
          </li>
          }
        </ul>
      </div>
      }
      <!-- Compliance -->
      @if (compliance().length) {
      <div class="account-status__section">
        <div class="account-status__headline">
          <h2 class="account-status__title">Compliance & Documentation</h2>
          <a class="account-status__link" href="#">See history →</a>
        </div>

        <ul class="account-status__list">
          @for (item of compliance(); track item) {
          <li class="account-status__list-item">✅ {{ item }}</li>
          }
        </ul>
      </div>
      }
    </section>
  `,
})
export class AccountStatus {
  readonly status = input.required<string[]>();
  readonly compliance = input.required<string[]>();
}
