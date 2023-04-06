import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtInstanceComponent } from './dt-instance.component';

describe('DtInstanceComponent', () => {
  let component: DtInstanceComponent;
  let fixture: ComponentFixture<DtInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
