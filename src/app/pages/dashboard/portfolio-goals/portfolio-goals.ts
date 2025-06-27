import { Component, input } from '@angular/core';
import { IPortfolioGoals } from '../../../core/models/models';

@Component({
  selector: 'app-portfolio-goals',
  imports: [],
  template: `<section class="portfolio-card">
    <h3>Portfolio goals</h3>
    @for (goal of data(); track goal.title) {
    <div class="goal">
      <div class="goal__title">{{ goal.title }}</div>
      <div class="progress-bar">
        <div class="progress-bar__fill fill" [class]="goal.status">
          <div class="fill__value">{{ goal.value }}</div>
        </div>
      </div>
      <div class="goal__desc">{{ goal.description }}</div>
    </div>
    }
  </section> `,
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  readonly data = input.required<IPortfolioGoals[]>();
}
