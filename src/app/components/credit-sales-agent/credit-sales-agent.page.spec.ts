import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditSalesAgentPage } from './credit-sales-agent.page';

describe('CreditSalesAgentPage', () => {
  let component: CreditSalesAgentPage;
  let fixture: ComponentFixture<CreditSalesAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSalesAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
