import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EastPanelComponent } from './east-panel.component';

describe('EastPanelComponent', () => {
  let component: EastPanelComponent;
  let fixture: ComponentFixture<EastPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EastPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EastPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
