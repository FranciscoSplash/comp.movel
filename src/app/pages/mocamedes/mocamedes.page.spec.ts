import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocamedesPage } from './mocamedes.page';

describe('MocamedesPage', () => {
  let component: MocamedesPage;
  let fixture: ComponentFixture<MocamedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocamedesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocamedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
