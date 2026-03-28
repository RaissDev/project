import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCorrectiveComponent } from './action-corrective.component';

describe('ActionCorrectiveComponent', () => {
  let component: ActionCorrectiveComponent;
  let fixture: ComponentFixture<ActionCorrectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionCorrectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionCorrectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
