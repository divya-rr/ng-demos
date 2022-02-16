import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNinthComponent } from './class-ninth.component';

describe('ClassNinthComponent', () => {
  let component: ClassNinthComponent;
  let fixture: ComponentFixture<ClassNinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassNinthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassNinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
