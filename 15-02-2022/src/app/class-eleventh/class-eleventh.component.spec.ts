import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEleventhComponent } from './class-eleventh.component';

describe('ClassEleventhComponent', () => {
  let component: ClassEleventhComponent;
  let fixture: ComponentFixture<ClassEleventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassEleventhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEleventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
