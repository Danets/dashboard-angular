import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import {
  Header,
  IWinnability,
  Performance,
  Policy,
} from '../../core/models/models';

@Injectable({ providedIn: 'root' })
export class AccountDataService {
  readonly header = signal<Header | null>(null);
  readonly performanceMetrics = signal<Performance | null>(null);
  readonly policies = signal<Policy[]>([]);
  readonly status = signal<string[]>([]);
  readonly compliance = signal<string[]>([]);
  readonly winnability = signal<IWinnability | null>(null);

  constructor(private readonly http: HttpClient) {
    this.loadMockData();
  }

  private loadMockData() {
    this.http
      .get<any>('assets/mock-account-data.json')
      .pipe(delay(800))
      .subscribe((mock) => {
        this.header.set(mock.header);
        this.performanceMetrics.set(mock.performanceMetrics);
        this.policies.set(mock.policies);
        this.status.set(mock.status);
        this.compliance.set(mock.compliance);
        this.winnability.set(mock.winnability);
      });
  }
}
