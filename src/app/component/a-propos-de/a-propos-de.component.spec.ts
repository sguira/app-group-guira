import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposDeComponent } from './a-propos-de.component';

describe('AProposDeComponent', () => {
  let component: AProposDeComponent;
  let fixture: ComponentFixture<AProposDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProposDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
