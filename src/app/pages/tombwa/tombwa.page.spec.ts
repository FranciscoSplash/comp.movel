import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TombwaPage } from './tombwa.page';

describe('TombwaPage', () => {
  let component: TombwaPage;
  let fixture: ComponentFixture<TombwaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombwaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TombwaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
