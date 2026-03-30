import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CearteInspectionComponent } from './cearte-inspection.component';

describe('CearteInspectionComponent', () => {
  let component: CearteInspectionComponent;
  let fixture: ComponentFixture<CearteInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CearteInspectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CearteInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
