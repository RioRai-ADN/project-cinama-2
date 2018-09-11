import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAboveComponent } from './img-above.component';

describe('ImgAboveComponent', () => {
  let component: ImgAboveComponent;
  let fixture: ComponentFixture<ImgAboveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgAboveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
