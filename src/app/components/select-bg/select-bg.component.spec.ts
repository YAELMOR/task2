import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBgComponent } from './select-bg.component';

describe('SelectBgComponent', () => {
  let component: SelectBgComponent;
  let fixture: ComponentFixture<SelectBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
