import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestersPageComponent } from './semesters-page.component';

describe('SemestersPageComponent', () => {
  let component: SemestersPageComponent;
  let fixture: ComponentFixture<SemestersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemestersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemestersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
