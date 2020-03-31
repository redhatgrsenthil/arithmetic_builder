import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticQueryBuilderComponent } from './arithmetic-query-builder.component';

describe('ArithmeticQueryBuilderComponent', () => {
  let component: ArithmeticQueryBuilderComponent;
  let fixture: ComponentFixture<ArithmeticQueryBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArithmeticQueryBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArithmeticQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
