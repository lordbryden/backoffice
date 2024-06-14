import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageStudentsPage } from './manage-students.page';

describe('ManageStudentsPage', () => {
  let component: ManageStudentsPage;
  let fixture: ComponentFixture<ManageStudentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
