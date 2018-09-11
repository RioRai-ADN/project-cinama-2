import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCsComponent } from './panel-cs.component';

describe('PanelCsComponent', () => {
  let component: PanelCsComponent;
  let fixture: ComponentFixture<PanelCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
