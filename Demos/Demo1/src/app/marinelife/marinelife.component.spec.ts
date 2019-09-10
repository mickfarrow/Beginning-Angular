import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinelifeComponent } from './marinelife.component';

describe('MarinelifeComponent', () => {
  let component: MarinelifeComponent;
  let fixture: ComponentFixture<MarinelifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarinelifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinelifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
