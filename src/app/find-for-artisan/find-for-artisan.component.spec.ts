import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindForArtisanComponent } from './find-for-artisan.component';

describe('FindForArtisanComponent', () => {
  let component: FindForArtisanComponent;
  let fixture: ComponentFixture<FindForArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindForArtisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindForArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
