import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMappingComponent } from './default-mapping.component';

describe('DefaultMappingComponent', () => {
  let component: DefaultMappingComponent;
  let fixture: ComponentFixture<DefaultMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
