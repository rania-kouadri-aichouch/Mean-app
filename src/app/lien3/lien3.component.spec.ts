import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lien3Component } from './lien3.component';

describe('Lien3Component', () => {
  let component: Lien3Component;
  let fixture: ComponentFixture<Lien3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lien3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lien3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
