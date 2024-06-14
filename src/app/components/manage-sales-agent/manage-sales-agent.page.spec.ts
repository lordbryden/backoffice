import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageSalesAgentPage } from './manage-sales-agent.page';

describe('ManageSalesAgentPage', () => {
  let component: ManageSalesAgentPage;
  let fixture: ComponentFixture<ManageSalesAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSalesAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
