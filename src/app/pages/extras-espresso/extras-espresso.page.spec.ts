import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasEspressoPage } from './extras-espresso.page';

describe('ExtrasEspressoPage', () => {
  let component: ExtrasEspressoPage;
  let fixture: ComponentFixture<ExtrasEspressoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasEspressoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasEspressoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
