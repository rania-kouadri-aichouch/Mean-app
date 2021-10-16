import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lien2Component } from './lien2.component';

describe('Lien2Component', () => {
  let component: Lien2Component;
  let fixture: ComponentFixture<Lien2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lien2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lien2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
