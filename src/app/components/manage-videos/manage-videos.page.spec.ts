import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageVideosPage } from './manage-videos.page';

describe('ManageVideosPage', () => {
  let component: ManageVideosPage;
  let fixture: ComponentFixture<ManageVideosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
