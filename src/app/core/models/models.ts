export interface IWorkQueue {
  originator: string;
  clientLine: string;
  type: string;
  status: string;
  created: string;
}

export interface IAccounts {
  name: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: string;
  status: string;
  triage: number;
  winnability: string;
}

export interface IPortfolioGoals {
  title: string;
  value: string;
  description: string;
  status: string;
}

export interface IMarketIntel {
  text: string;
  type: string;
}
