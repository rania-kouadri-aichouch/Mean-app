import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lien1Component } from './lien1.component';

describe('Lien1Component', () => {
  let component: Lien1Component;
  let fixture: ComponentFixture<Lien1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lien1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lien1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
