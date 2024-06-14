import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifySubjectsPage } from './modify-subjects.page';

describe('ModifySubjectsPage', () => {
  let component: ModifySubjectsPage;
  let fixture: ComponentFixture<ModifySubjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
