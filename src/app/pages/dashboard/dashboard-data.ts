import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardData {
  readonly portfolioGoals = signal([]);
  readonly quickActions = signal([]);
  readonly marketIntel = signal([]);
  readonly workQueue = signal([]);
  readonly accounts = signal([]);

  constructor(private readonly http: HttpClient) {
    this.loadMockData();
  }

  private loadMockData() {
    this.http
      .get<any>('assets/mock-data.json')
      .pipe(delay(800))
      .subscribe((mock) => {
        this.portfolioGoals.set(mock.portfolioGoals);
        this.quickActions.set(mock.quickActions);
        this.marketIntel.set(mock.marketIntel);
        this.workQueue.set(mock.workQueue);
        this.accounts.set(mock.accounts);
      });
  }
}
