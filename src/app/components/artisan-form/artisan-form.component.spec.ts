import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanFormComponent } from './artisan-form.component';

describe('ArtisanFormComponent', () => {
  let component: ArtisanFormComponent;
  let fixture: ComponentFixture<ArtisanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
