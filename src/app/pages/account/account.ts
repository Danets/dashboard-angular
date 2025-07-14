import { Component, inject } from '@angular/core';
import { AccountHeader } from './account-header/account-header';
import { AccountDataService } from './account-data.service';

@Component({
  selector: 'app-account',
  imports: [AccountHeader],
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account {
  accountData = inject(AccountDataService);
}
