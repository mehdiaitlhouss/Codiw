import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereContentPageComponent } from './matiere-content-page.component';

describe('MatiereContentPageComponent', () => {
  let component: MatiereContentPageComponent;
  let fixture: ComponentFixture<MatiereContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereContentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiereContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
