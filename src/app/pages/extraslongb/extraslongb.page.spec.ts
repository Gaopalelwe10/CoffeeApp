import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraslongbPage } from './extraslongb.page';

describe('ExtraslongbPage', () => {
  let component: ExtraslongbPage;
  let fixture: ComponentFixture<ExtraslongbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraslongbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraslongbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
