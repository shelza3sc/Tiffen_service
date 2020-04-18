import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderrComponent } from './sliderr.component';

describe('SliderrComponent', () => {
  let component: SliderrComponent;
  let fixture: ComponentFixture<SliderrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
