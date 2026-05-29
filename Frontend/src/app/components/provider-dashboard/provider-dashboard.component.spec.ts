import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProviderDashboardComponent } from "./provider-dashboard.component";

describe("ProviderDashboardComponent", () => {
  let component: ProviderDashboardComponent;
  let fixture: ComponentFixture<ProviderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderDashboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderDashboardComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show empty state when metrics are unavailable", () => {
    component.metrics = [];

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain(
      "No leakage metrics are available."
    );
  });

  it("should calculate leakage trend from metrics", () => {
    component.metrics = [
      {
        market: "Dallas",
        leakageRate: 20,
        opportunityScore: 75
      },
      {
        market: "Chicago",
        leakageRate: 40,
        opportunityScore: 82
      }
    ];

    expect(component.leakageTrend).toBe(30);
  });

  it("should render current leakage when metrics exist", () => {
    component.metrics = [
      {
        market: "Dallas",
        leakageRate: 20,
        opportunityScore: 75
      },
      {
        market: "Chicago",
        leakageRate: 40,
        opportunityScore: 82
      }
    ];

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain("Current Average Leakage");
    expect(element.textContent).toContain("30.00%");
    expect(element.textContent).toContain("Low");
  });

  it("should render title and label from signals", () => {
    expect(component.title()).toBe("Provider Network Dashboard");
    expect(component.leakageLabel()).toBe("Current Average Leakage");

    component.metrics = [
      {
        market: "Dallas",
        leakageRate: 20,
        opportunityScore: 75
      }
    ];

    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector(
      ".provider-dashboard__header h1"
    ) as HTMLElement;
    const label = fixture.nativeElement.querySelector(
      ".summary-card__label"
    ) as HTMLElement;

    expect(header.textContent?.trim()).toBe("Provider Network Dashboard");
    expect(label.textContent?.trim()).toBe("Current Average Leakage");
  });
});
