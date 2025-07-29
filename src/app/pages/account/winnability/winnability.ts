import { Component, input } from '@angular/core';
import { IWinnability } from '../../../core/models/models';

@Component({
  selector: 'app-winnability',
  imports: [],
  styleUrl: './winnability.scss',
  templateUrl: './winnability.html',
})
export class Winnability {
  readonly winnability = input.required<IWinnability>();
  winnabilityDots = [1, 2, 3, 4];
}
