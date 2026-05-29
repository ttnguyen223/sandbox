import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeakageMetrics } from '../../models/leakage-metrics';
import { calculateLeakageTrend, getOpportunityCategory } from '../../services/leakage-service';

@Component({
  selector: 'app-provider-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.scss']
})
export class ProviderDashboardComponent {
  title = signal('Provider Network Dashboard');
  leakageLabel = signal('Current Average Leakage');
  @Input() metrics: LeakageMetrics[] = [];

  get leakageTrend(): number {
    return calculateLeakageTrend(this.metrics);
  }

  get opportunityCategory(): string {
    return getOpportunityCategory(this.leakageTrend);
  }

  get hasMetrics(): boolean {
    return this.metrics && this.metrics.length > 0;
  }
}