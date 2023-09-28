import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuoteComponent } from './get-quote.component';

describe('GetQuoteComponent', () => {
  let component: GetQuoteComponent;
  let fixture: ComponentFixture<GetQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetQuoteComponent]
    });
    fixture = TestBed.createComponent(GetQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
