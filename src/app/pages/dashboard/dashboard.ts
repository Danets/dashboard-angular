import { Component } from '@angular/core';
import { WorkQueue } from './work-queue/work-queue';
import { Accounts } from './accounts/accounts';

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, Accounts],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
