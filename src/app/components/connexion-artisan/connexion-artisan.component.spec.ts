import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionArtisanComponent } from './connexion-artisan.component';

describe('ConnexionArtisanComponent', () => {
  let component: ConnexionArtisanComponent;
  let fixture: ComponentFixture<ConnexionArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionArtisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
