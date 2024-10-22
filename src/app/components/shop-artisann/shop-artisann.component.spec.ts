import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopArtisannComponent } from './shop-artisann.component';

describe('ShopArtisannComponent', () => {
  let component: ShopArtisannComponent;
  let fixture: ComponentFixture<ShopArtisannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopArtisannComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopArtisannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
