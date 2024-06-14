import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifySalesAgentPage } from './modify-sales-agent.page';

describe('ModifySalesAgentPage', () => {
  let component: ModifySalesAgentPage;
  let fixture: ComponentFixture<ModifySalesAgentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySalesAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
