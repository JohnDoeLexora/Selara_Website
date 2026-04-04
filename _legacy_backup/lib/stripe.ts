export const PRICE_IDS = {
  select: {
    monthly: 'price_1TGSw2B8XzjWWlS6g5aQ7kv8',
    annual: 'price_1TGSwBB8XzjWWlS6DoL7Y8O3',
  },
  premium: {
    monthly: 'price_1TGSwCB8XzjWWlS6p8yyr3Lf',
    annual: 'price_1TGSwEB8XzjWWlS6TOWSFOI0',
  },
  pinnacle: {
    monthly: 'price_1TGSwFB8XzjWWlS6G3S1ImhP',
    annual: 'price_1TGSwGB8XzjWWlS6nMZfZKbW',
  },
} as const;

export type PlanKey = keyof typeof PRICE_IDS;
export type BillingCycle = 'monthly' | 'annual';
