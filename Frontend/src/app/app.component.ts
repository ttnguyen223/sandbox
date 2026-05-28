import { Component } from '@angular/core';
import { ProviderDashboardComponent } from './components/provider-dashboard/provider-dashboard.component';
import { LeakageMetrics } from './models/leakage-metrics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProviderDashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  metrics: LeakageMetrics[] = [
    { market: 'Dallas', leakageRate: 20, opportunityScore: 75 },
    { market: 'Chicago', leakageRate: 40, opportunityScore: 82 }
  ];
}
