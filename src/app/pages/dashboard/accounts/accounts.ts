import { Component, input } from '@angular/core';
import { IAccounts } from '../../../core/models/models';

@Component({
  selector: 'app-accounts',
  imports: [],
  templateUrl: './accounts.html',
  styleUrl: './accounts.scss',
})
export class Accounts {
  data = input.required<IAccounts[]>();
}
