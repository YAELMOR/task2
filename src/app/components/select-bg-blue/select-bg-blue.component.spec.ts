import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBgBlueComponent } from './select-bg-blue.component';

describe('SelectBgBlueComponent', () => {
  let component: SelectBgBlueComponent;
  let fixture: ComponentFixture<SelectBgBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBgBlueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBgBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
