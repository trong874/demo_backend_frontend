import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableAddComponent } from './vegetable-add.component';

describe('VegetableAddComponent', () => {
  let component: VegetableAddComponent;
  let fixture: ComponentFixture<VegetableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
