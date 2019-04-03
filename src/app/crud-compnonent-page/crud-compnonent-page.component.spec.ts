import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompnonentPageComponent } from './crud-compnonent-page.component';

describe('CrudCompnonentPageComponent', () => {
  let component: CrudCompnonentPageComponent;
  let fixture: ComponentFixture<CrudCompnonentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCompnonentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCompnonentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
