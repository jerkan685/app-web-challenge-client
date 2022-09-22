import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListClientComponent } from './form-list-client.component';

describe('FormListClientComponent', () => {
  let component: FormListClientComponent;
  let fixture: ComponentFixture<FormListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
