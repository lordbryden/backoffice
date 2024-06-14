import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVideosPage } from './create-videos.page';

describe('CreateVideosPage', () => {
  let component: CreateVideosPage;
  let fixture: ComponentFixture<CreateVideosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
