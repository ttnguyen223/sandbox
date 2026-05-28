import { LeakageMetrics } from '../models/leakage-metrics';

export function calculateLeakageTrend(
  metrics: LeakageMetrics[]
): number {
  if (!metrics.length) {
    return 0;
  }

  const totalLeakage = metrics.reduce(
    (sum, metric) => sum + metric.leakageRate,
    0
  );

  return totalLeakage / metrics.length;
}

export function getOpportunityCategory(score: number): string {
  if (score >= 80) {
    return "High";
  }

  if (score >= 50) {
    return "Medium";
  }

  return "Low";
}