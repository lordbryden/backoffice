import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSalesAgentPage } from './create-sales-agent.page';

describe('CreateSalesAgentPage', () => {
  let component: CreateSalesAgentPage;
  let fixture: ComponentFixture<CreateSalesAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalesAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
