import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfApproachComponent } from './tdf-approach.component';

describe('TdfApproachComponent', () => {
  let component: TdfApproachComponent;
  let fixture: ComponentFixture<TdfApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfApproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
