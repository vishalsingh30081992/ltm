import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostStructureComponent } from './cost-structure.component';

describe('CostStructureComponent', () => {
  let component: CostStructureComponent;
  let fixture: ComponentFixture<CostStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
