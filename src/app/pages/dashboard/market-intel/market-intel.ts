import { Component, input, Signal } from '@angular/core';
import { IMarketIntel } from '../../../core/models/models';

@Component({
  selector: 'app-market-intel',
  imports: [],
  templateUrl: './market-intel.html',
  styleUrl: './market-intel.scss',
})
export class MarketIntel {
  data = input.required<IMarketIntel[]>();
}
