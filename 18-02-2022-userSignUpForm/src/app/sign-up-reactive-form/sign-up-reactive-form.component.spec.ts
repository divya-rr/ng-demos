import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpReactiveFormComponent } from './sign-up-reactive-form.component';

describe('SignUpReactiveFormComponent', () => {
  let component: SignUpReactiveFormComponent;
  let fixture: ComponentFixture<SignUpReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
