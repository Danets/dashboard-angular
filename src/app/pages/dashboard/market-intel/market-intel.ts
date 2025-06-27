import { Component, input, Signal } from '@angular/core';
import { IMarketIntel } from '../../../core/models/models';

@Component({
  selector: 'app-market-intel',
  imports: [],
  template: `
    <section class="market">
      <h3 class="market__title">Market Intel</h3>
      <ul class="market__list list">
        @for (market of data(); track market.text) {
        <li class="list__item item">
          <p class="item__badge" [class]="market.type"></p>
          <p class="item__descr">{{ market.text }}</p>
        </li>
        }
      </ul>
    </section>
  `,
  styleUrl: './market-intel.scss',
})
export class MarketIntel {
  readonly data = input.required<IMarketIntel[]>();
}
