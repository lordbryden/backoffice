import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyStudentPage } from './modify-student.page';

describe('ModifyStudentPage', () => {
  let component: ModifyStudentPage;
  let fixture: ComponentFixture<ModifyStudentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
