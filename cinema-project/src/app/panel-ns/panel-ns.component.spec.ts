import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNsComponent } from './panel-ns.component';

describe('PanelNsComponent', () => {
  let component: PanelNsComponent;
  let fixture: ComponentFixture<PanelNsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
