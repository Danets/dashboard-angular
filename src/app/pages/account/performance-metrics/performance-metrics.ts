import { Component, input } from '@angular/core';
import { Performance } from '../../../core/models/models';

@Component({
  selector: 'app-performance-metrics',
  styleUrl: './performance-metrics.scss',
  template: `
    @if (metrics()) {
    <h2 class="performance-metrics__headline">Performance Metrics</h2>

    <section class="performance-metrics">
      <!-- Winnability -->
      <div class="performance-metrics__card">
        <h4 class="performance-metrics__title">Winnability</h4>
        <p class="performance-metrics__value">
          {{ metrics().winnability }}
        </p>
        <a class="performance-metrics__link" href="#">See all factors →</a>
      </div>

      <!-- Loss Ratio -->
      <div class="performance-metrics__card">
        <h4 class="performance-metrics__title">Loss Ratio</h4>
        <p class="performance-metrics__value">
          {{ metrics().lossRatio }}
        </p>
        <a class="performance-metrics__link" href="#">View history →</a>
      </div>

      <!-- Premium Growth -->
      <div class="performance-metrics__card">
        <h4 class="performance-metrics__title">Premium Growth</h4>
        <p class="performance-metrics__value">
          {{ metrics().premiumGrowth }}
        </p>
        <a class="performance-metrics__link" href="#">View trend →</a>
      </div>

      <!-- Exposure Distribution -->
      <div class="performance-metrics__card">
        <h4 class="performance-metrics__title">Exposure Distribution</h4>
        <div class="performance-metrics__bars">
          @for (item of metrics().exposure; track item.label) {
          <div class="performance-metrics__bar">
            <div class="performance-metrics__bar-track">
              <div
                class="performance-metrics__bar-fill"
                [style.width.%]="item.value"
              ></div>
            </div>
            <h5 class="performance-metrics__bar-label">
              {{ item.label }}: {{ item.value }}%
            </h5>
          </div>
          }
        </div>
      </div>
    </section>
    }
  `,
})
export class PerformanceMetrics {
  readonly metrics = input.required<Performance>();
}
