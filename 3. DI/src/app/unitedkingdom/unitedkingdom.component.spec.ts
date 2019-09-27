import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedkingdomComponent } from './unitedkingdom.component';

describe('UnitedkingdomComponent', () => {
  let component: UnitedkingdomComponent;
  let fixture: ComponentFixture<UnitedkingdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedkingdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedkingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
