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

  const averageLeakage = metrics.length > 0 ? totalLeakage / metrics.length : 0;
  return Math.round(averageLeakage * 100) / 100;
}

export function formatLeakageTrend(metrics: LeakageMetrics[]): string {
  return `${calculateLeakageTrend(metrics).toFixed(2)}%`;
}

export function getOpportunityCategory(score: number, isDollars = false): string {
  if (score >= 80 && isDollars) {
    return "High Dollars";
  }

  if (score >= 90) {
    return "High";
  }

  if (score >= 50) {
    return "Medium";
  }

  return "Low";
}