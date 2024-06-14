import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyVideosPage } from './modify-videos.page';

describe('ModifyVideosPage', () => {
  let component: ModifyVideosPage;
  let fixture: ComponentFixture<ModifyVideosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
