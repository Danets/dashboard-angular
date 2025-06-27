import { Component, input } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  imports: [],
  template: `
    <section class="actions">
      <h3 class="actions__title">Quick Actions</h3>
      <div class="actions__grid grid">
        @for (action of data(); track action) {
        <button class="grid__button">{{ action }}</button>
        }
      </div>
    </section>
  `,
  styleUrl: './quick-actions.scss',
})
export class QuickActions {
  readonly data = input.required<string[]>();
}
