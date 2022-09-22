import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisysClientLisComponent } from './analisys-client-lis.component';

describe('AnalisysClientLisComponent', () => {
  let component: AnalisysClientLisComponent;
  let fixture: ComponentFixture<AnalisysClientLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisysClientLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisysClientLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
