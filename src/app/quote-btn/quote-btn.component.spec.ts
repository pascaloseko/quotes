import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBtnComponent } from './quote-btn.component';

describe('QuoteBtnComponent', () => {
  let component: QuoteBtnComponent;
  let fixture: ComponentFixture<QuoteBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
