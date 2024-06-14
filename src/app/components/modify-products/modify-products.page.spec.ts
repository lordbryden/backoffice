import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyProductsPage } from './modify-products.page';

describe('ModifyProductsPage', () => {
  let component: ModifyProductsPage;
  let fixture: ComponentFixture<ModifyProductsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
