import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresPageComponent } from './matieres-page.component';

describe('MatieresPageComponent', () => {
  let component: MatieresPageComponent;
  let fixture: ComponentFixture<MatieresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatieresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatieresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
