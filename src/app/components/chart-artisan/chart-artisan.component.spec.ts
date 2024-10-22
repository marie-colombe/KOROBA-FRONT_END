import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartArtisanComponent } from './chart-artisan.component';

describe('ChartArtisanComponent', () => {
  let component: ChartArtisanComponent;
  let fixture: ComponentFixture<ChartArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartArtisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
