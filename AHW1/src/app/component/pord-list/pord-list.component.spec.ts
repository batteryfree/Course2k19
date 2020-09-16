import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PordListComponent } from './pord-list.component';

describe('PordListComponent', () => {
  let component: PordListComponent;
  let fixture: ComponentFixture<PordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
