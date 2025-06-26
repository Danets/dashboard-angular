import { Component, input } from '@angular/core';
import { IPortfolioGoals } from '../../../core/models/models';

@Component({
  selector: 'app-portfolio-goals',
  imports: [],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  readonly data = input.required<IPortfolioGoals[]>();
}
