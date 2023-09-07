import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuxComponent } from './gux.component';

describe('GuxComponent', () => {
  let component: GuxComponent;
  let fixture: ComponentFixture<GuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuxComponent]
    });
    fixture = TestBed.createComponent(GuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
