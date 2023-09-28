import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionProviderComponent } from './solution-provider.component';

describe('SolutionProviderComponent', () => {
  let component: SolutionProviderComponent;
  let fixture: ComponentFixture<SolutionProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionProviderComponent]
    });
    fixture = TestBed.createComponent(SolutionProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
