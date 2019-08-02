import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasLattePage } from './extras-latte.page';

describe('ExtrasLattePage', () => {
  let component: ExtrasLattePage;
  let fixture: ComponentFixture<ExtrasLattePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasLattePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasLattePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
