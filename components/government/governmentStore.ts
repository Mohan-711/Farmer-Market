import { complaints as defaultComplaints, companies as defaultCompanies, farmers as defaultFarmers, notifications as defaultNotifications, priceMonitoring as defaultPriceMonitoring, transactions as defaultTransactions, verificationRequests as defaultVerificationRequests } from './mockGovernmentData';

export type GovernmentState = {
  farmers: typeof defaultFarmers;
  companies: typeof defaultCompanies;
  complaints: typeof defaultComplaints;
  notifications: typeof defaultNotifications;
  priceMonitoring: typeof defaultPriceMonitoring;
  transactions: typeof defaultTransactions;
  verificationRequests: typeof defaultVerificationRequests;
};

const STORAGE_KEY = 'agri_government_state';

export function getGovernmentState(): GovernmentState {
  if (typeof window === 'undefined') return defaultState();

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (!value) return defaultState();
    const parsed = JSON.parse(value) as Partial<GovernmentState>;
    return {
      farmers: parsed.farmers ?? defaultFarmers,
      companies: parsed.companies ?? defaultCompanies,
      complaints: parsed.complaints ?? defaultComplaints,
      notifications: parsed.notifications ?? defaultNotifications,
      priceMonitoring: parsed.priceMonitoring ?? defaultPriceMonitoring,
      transactions: parsed.transactions ?? defaultTransactions,
      verificationRequests: parsed.verificationRequests ?? defaultVerificationRequests,
    };
  } catch {
    return defaultState();
  }
}

export function setGovernmentState(next: GovernmentState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function defaultState(): GovernmentState {
  return {
    farmers: defaultFarmers,
    companies: defaultCompanies,
    complaints: defaultComplaints,
    notifications: defaultNotifications,
    priceMonitoring: defaultPriceMonitoring,
    transactions: defaultTransactions,
    verificationRequests: defaultVerificationRequests,
  };
}
