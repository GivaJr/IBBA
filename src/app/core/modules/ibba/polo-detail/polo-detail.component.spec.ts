import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloDetailComponent } from './polo-detail.component';

describe('PoloDetailComponent', () => {
  let component: PoloDetailComponent;
  let fixture: ComponentFixture<PoloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
