export type ConfidenceClass = 'Measured' | 'Estimated' | 'Modeled' | 'Self-reported' | 'Reported' | 'Categorical' | 'Calculated';

export type VisualType = 'LogDescent' | 'LogAscent' | 'ThresholdLadder' | 'EvolutionaryLadder' | 'HaloRing' | 'ReservoirFill' | 'Timeline' | 'Area Chart' | 'Gauge' | 'Map / Bubble' | 'Sankey Flow' | 'Radar Chart' | 'Step Line' | 'Oscillation Chart' | 'Grid' | 'MonolithBars' | 'SplitRiver' | 'DysonSwarm' | 'SynapticCloud' | 'LogMagnitudeBar' | 'SiliconDensityMatrix' | 'AsymptoticCurve' | 'PhylogeneticNodes' | 'PlanetaryEnergyCapture' | 'ConnectomeScanner';

export interface Metric {
  id: string;
  category: string;
  name: string;
  shortLabel: string;
  currentValue: number | string;
  unit: string;
  displayValue: string;
  trendDirection: 'up' | 'down' | 'flat';
  trendMagnitude: string;
  confidenceClass: ConfidenceClass;
  sourceQuality: string;
  sourceName: string;
  sourceUrl: string;
  methodologyNote: string;
  lastUpdated: string;
  updateCadence: string;
  whyItMatters: string;
  contextNote?: string;
  visualType: VisualType;
  historicalSeries?: { date: string; value: number }[];
  uncertaintyLow?: number | string;
  uncertaintyHigh?: number | string;
  thresholds?: string[];
  milestoneEvents?: { date: string; description: string }[];
  isHero: boolean;
  isModeled: boolean;
  isSelfReported: boolean;
  annualVelocityPct: number;
  indexWeight: number;
}
