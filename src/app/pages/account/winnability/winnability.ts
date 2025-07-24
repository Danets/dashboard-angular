import { Component, input } from '@angular/core';
import { IWinnability } from '../../../core/models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-winnability',
  imports: [CommonModule],
  styleUrl: './winnability.scss',
  templateUrl: './winnability.html',
})
export class Winnability {
  readonly winnability = input.required<IWinnability>();
  winnabilityDots = [1, 2, 3, 4];
}
