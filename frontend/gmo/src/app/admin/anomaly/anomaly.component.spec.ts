import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyComponent } from './anomaly.component';

describe('AnomalyComponent', () => {
  let component: AnomalyComponent;
  let fixture: ComponentFixture<AnomalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnomalyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnomalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
