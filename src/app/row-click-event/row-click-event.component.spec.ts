import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowClickEventComponent } from './row-click-event.component';

describe('RowClickEventComponent', () => {
  let component: RowClickEventComponent;
  let fixture: ComponentFixture<RowClickEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowClickEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowClickEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
