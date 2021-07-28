import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableEditComponent } from './vegetable-edit.component';

describe('VegetableEditComponent', () => {
  let component: VegetableEditComponent;
  let fixture: ComponentFixture<VegetableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
