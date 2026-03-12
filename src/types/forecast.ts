export type ValuationThreshold = 
  | 10_000_000 
  | 100_000_000 
  | 1_000_000_000 
  | 10_000_000_000 
  | 100_000_000_000 
  | 1_000_000_000_000;

export const VALUATION_THRESHOLDS = [
  10_000_000, 
  100_000_000, 
  1_000_000_000, 
  10_000_000_000, 
  100_000_000_000, 
  1_000_000_000_000
] as const;

export type HorizonDate = '2030-01-01' | '2035-01-01' | '2040-01-01';

export type ForecastSourceType = 'AI' | 'Editorial' | 'Member' | 'FrontierMember' | 'Aggregate';

/** 
 * A single cumulative monotonic curve for one specific date horizon.
 * Keys are the threshold values, values are probabilities from [0, 100].
 */
export type ForecastCurve = {
    horizonDate: HorizonDate;
    probabilities: Record<string, number>; // Record<ValuationThreshold, number> serialized
};

/**
 * A complete forecast submission containing curves for all 3 horizons.
 */
export type CategoryForecast = {
    id: string;
    targetIdeaSlug: string;
    sourceType: ForecastSourceType;
    sourceUserId?: string; // Null if AI or Aggregate
    updatedAt: string;
    curves: Record<HorizonDate, ForecastCurve>;
};

// --- Display Utility Types ---
export const THRESHOLD_LABELS: Record<string, string> = {
  "10000000": "$10M",
  "100000000": "$100M",
  "1000000000": "$1B",
  "10000000000": "$10B",
  "100000000000": "$100B",
  "1000000000000": "$1T"
};

export const VALUATION_BANDS = [
  { id: "band_1", label: "Below $10M",            min: 0,              max: 10_000_000 },
  { id: "band_2", label: "$10M to $100M",         min: 10_000_000,     max: 100_000_000 },
  { id: "band_3", label: "$100M to $1B",          min: 100_000_000,    max: 1_000_000_000 },
  { id: "band_4", label: "$1B to $10B",           min: 1_000_000_000,  max: 10_000_000_000 },
  { id: "band_5", label: "$10B to $100B",         min: 10_000_000_000, max: 100_000_000_000 },
  { id: "band_6", label: "$100B to $1T",          min: 100_000_000_000,max: 1_000_000_000_000 },
  { id: "band_7", label: "$1T+",                  min: 1_000_000_000_000, max: Infinity }
];
