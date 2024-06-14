import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateStudentPage } from './create-student.page';

describe('CreateStudentPage', () => {
  let component: CreateStudentPage;
  let fixture: ComponentFixture<CreateStudentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
