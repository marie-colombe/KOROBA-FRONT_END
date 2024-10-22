import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilArtisanComponent } from './profil-artisan.component';

describe('ProfilArtisanComponent', () => {
  let component: ProfilArtisanComponent;
  let fixture: ComponentFixture<ProfilArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilArtisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
