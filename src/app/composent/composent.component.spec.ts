import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposentComponent } from './composent.component';

describe('ComposentComponent', () => {
  let component: ComposentComponent;
  let fixture: ComponentFixture<ComposentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
