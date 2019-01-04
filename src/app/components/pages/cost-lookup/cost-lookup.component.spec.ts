import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostLookupComponent } from './cost-lookup.component';

describe('CostLookupComponent', () => {
  let component: CostLookupComponent;
  let fixture: ComponentFixture<CostLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
