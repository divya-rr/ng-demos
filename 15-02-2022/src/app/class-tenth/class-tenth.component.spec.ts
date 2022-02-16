import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTenthComponent } from './class-tenth.component';

describe('ClassTenthComponent', () => {
  let component: ClassTenthComponent;
  let fixture: ComponentFixture<ClassTenthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTenthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTenthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
