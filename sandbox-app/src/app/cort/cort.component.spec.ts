import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortComponent } from './cort.component';

describe('CortComponent', () => {
  let component: CortComponent;
  let fixture: ComponentFixture<CortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
