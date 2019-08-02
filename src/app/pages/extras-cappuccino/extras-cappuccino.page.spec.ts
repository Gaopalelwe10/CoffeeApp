import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasCappuccinoPage } from './extras-cappuccino.page';

describe('ExtrasCappuccinoPage', () => {
  let component: ExtrasCappuccinoPage;
  let fixture: ComponentFixture<ExtrasCappuccinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasCappuccinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasCappuccinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
