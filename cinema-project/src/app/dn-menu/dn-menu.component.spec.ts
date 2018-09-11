import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnMenuComponent } from './dn-menu.component';

describe('DnMenuComponent', () => {
  let component: DnMenuComponent;
  let fixture: ComponentFixture<DnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
