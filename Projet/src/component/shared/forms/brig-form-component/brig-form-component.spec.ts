import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrigFormComponent } from './brig-form-component';

describe('BrigFormComponent', () => {
  let component: BrigFormComponent;
  let fixture: ComponentFixture<BrigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrigFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
