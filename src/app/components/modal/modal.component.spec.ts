import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgbdModalComponent } from './modal.component';

describe('NgbdModalComponent', () => {
  let component: NgbdModalComponent;
  let fixture: ComponentFixture<NgbdModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
