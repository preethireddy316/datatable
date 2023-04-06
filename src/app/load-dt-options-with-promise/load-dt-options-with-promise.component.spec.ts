import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDtOptionsWithPromiseComponent } from './load-dt-options-with-promise.component';

describe('LoadDtOptionsWithPromiseComponent', () => {
  let component: LoadDtOptionsWithPromiseComponent;
  let fixture: ComponentFixture<LoadDtOptionsWithPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDtOptionsWithPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDtOptionsWithPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
