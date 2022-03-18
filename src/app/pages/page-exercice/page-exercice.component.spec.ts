import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExerciceComponent } from './page-exercice.component';

describe('PageExerciceComponent', () => {
  let component: PageExerciceComponent;
  let fixture: ComponentFixture<PageExerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
