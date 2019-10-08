import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenggunaPage } from './pengguna.page';

describe('PenggunaPage', () => {
  let component: PenggunaPage;
  let fixture: ComponentFixture<PenggunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenggunaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenggunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
