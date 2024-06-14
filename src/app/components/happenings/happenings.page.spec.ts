import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HappeningsPage } from './happenings.page';

describe('HappeningsPage', () => {
  let component: HappeningsPage;
  let fixture: ComponentFixture<HappeningsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
