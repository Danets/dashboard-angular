import { Component, input } from '@angular/core';
import { Header } from '../../../core/models/models';

@Component({
  selector: 'app-account-header',
  imports: [],
  template: `
    @if (header()) {
    <div class="account-header">
      <div class="account-header__leftblock">
        <div class="account-header__avatar"></div>
        <div class="account-header__info info">
          <h2 class="info__title">{{ header().company }}</h2>
          <p class="info__adress">{{ header().address }}</p>
          <div class="info__person-block person-block">
            <div class="person-block__item">
              <h5 class="person-block__title">Existing Account:</h5>
              <div class="person-block__subtitle">
                {{ header().existingAccount ? 'Yes' : 'No' }}
              </div>
            </div>
            <div class="person-block__item">
              <h5 class="person-block__title">Submissions:</h5>
              <div class="person-block__subtitle">
                {{ header().submissions }}
              </div>
            </div>
            <div class="person-block__item">
              <h5 class="person-block__title">Broker:</h5>
              <div class="person-block__subtitle">{{ header().broker }}</div>
            </div>
            <div class="person-block__item">
              <h5 class="person-block__title">Underwriter:</h5>
              <div class="person-block__subtitle">
                {{ header().underwriter }}
              </div>
            </div>
          </div>
        </div>
      </div>
      @if (header().needsAttention.length) {
      <div class="account-header__rightblock">
        <div class="account-header__attention-box attention-box">
          <h4 class="attention-box__title">⚠️ Needs Attention</h4>
          <ul class="attention-box__list">
            @for (item of header().needsAttention; track item) {
            <li class="attention-box__item">{{ item }}</li>
            }
          </ul>
        </div>
      </div>
      }
    </div>
    }
  `,
  styleUrl: './account-header.scss',
})
export class AccountHeader {
  readonly header = input.required<Header>();
}
