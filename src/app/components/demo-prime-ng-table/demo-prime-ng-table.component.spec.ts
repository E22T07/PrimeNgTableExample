import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPrimeNgTableComponent } from './demo-prime-ng-table.component';

describe('DemoPrimeNgTableComponent', () => {
  let component: DemoPrimeNgTableComponent;
  let fixture: ComponentFixture<DemoPrimeNgTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPrimeNgTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPrimeNgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
