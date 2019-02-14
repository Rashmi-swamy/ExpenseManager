import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestPanelComponent } from './west-panel.component';

describe('WestPanelComponent', () => {
  let component: WestPanelComponent;
  let fixture: ComponentFixture<WestPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
