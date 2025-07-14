export interface IWorkQueue {
  originator: string;
  client: string;
  line: string;
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

export interface Header {
  company: string;
  address: string;
  broker: string;
  underwriter: string;
  existingAccount: boolean;
  submissions: number;
  needsAttention: string[];
}

export interface PerformanceMetrics {
  winnability: string;
  lossRatio: string;
  premiumGrowth: string;
  exposure: Exposure[];
}

export interface Exposure {
  label: string;
  value: number;
}

export interface Policy {
  type: string;
  premium: string;
  etDate: string;
}

export interface Winnability {
  overallScore: number;
  tag: string;
  history: number[];
  position: Position;
  increasing: Exposure[];
  decreasing: Exposure[];
}

export interface Position {
  score: number;
  marketAvg: number;
  topCompetitor: number;
}

export interface Communication {
  tag: string;
  subject: string;
  from: string;
  date: string;
  message: string;
  attachments: number;
}

export interface PolicyTable {
  line: string;
  effDate: string;
  expDate: string;
  status: string;
  expiringTech: string;
  expiringPrem: string;
  renewalTech: string;
  renewalPrem: string;
  rateChange: string;
  lossRatio: string;
}
