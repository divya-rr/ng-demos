import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateOnSubmitComponent } from './validate-on-submit.component';

describe('ValidateOnSubmitComponent', () => {
  let component: ValidateOnSubmitComponent;
  let fixture: ComponentFixture<ValidateOnSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateOnSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateOnSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
