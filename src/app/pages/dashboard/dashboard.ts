import { Component, inject } from '@angular/core';
import { WorkQueue } from './work-queue/work-queue';
import { Accounts } from './accounts/accounts';
import { PortfolioGoals } from './portfolio-goals/portfolio-goals';
import { QuickActions } from './quick-actions/quick-actions';
import { MarketIntel } from './market-intel/market-intel';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, Accounts, PortfolioGoals, QuickActions, MarketIntel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  dataService = inject(DashboardDataService);
}
