import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonClassComponent } from './common-class.component';

describe('CommonClassComponent', () => {
  let component: CommonClassComponent;
  let fixture: ComponentFixture<CommonClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
