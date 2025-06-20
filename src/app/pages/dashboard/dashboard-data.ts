import { Injectable, signal } from '@angular/core';
import mock from '../../../../public/assets/mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class DashboardData {
  readonly portfolioGoals = signal(mock.portfolioGoals);
  readonly quickActions = signal(mock.quickActions);
  readonly marketIntel = signal(mock.marketIntel);
  readonly workQueue = signal(mock.workQueue);
  readonly accounts = signal(mock.accounts);
}
