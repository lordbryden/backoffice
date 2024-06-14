import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageSubjectsPage } from './manage-subjects.page';

describe('ManageSubjectsPage', () => {
  let component: ManageSubjectsPage;
  let fixture: ComponentFixture<ManageSubjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
