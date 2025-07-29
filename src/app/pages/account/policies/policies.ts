import { Component, input } from '@angular/core';
import { Policy } from '../../../core/models/models';

@Component({
  selector: 'app-policies',
  styleUrl: './policies.scss',
  template: `
    @if (policies().length) {
    <h2 class="policies__headline">Policies</h2>

    <section class="policies">
      @for (policy of policies(); track policy.type) {
      <div class="policies__card">
        <h4 class="policies__type">{{ policy.type }}</h4>
        <div class="policies__premium">Premium: {{ policy.premium }}</div>
        <div class="policies__et-date">
          End Date: {{ policy.etDate !== '—' ? policy.etDate : 'N/A' }}
        </div>
      </div>
      }
    </section>
    }
  `,
})
export class Policies {
  readonly policies = input.required<Policy[]>();
}
