import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongCardsComponent } from './song-cards.component'; // Ensure correct file name

describe('SongCardsComponent', () => { 
  let component: SongCardsComponent;
  let fixture: ComponentFixture<SongCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongCardsComponent], // `declarations` instead of `imports`
    }).compileComponents();

    fixture = TestBed.createComponent(SongCardsComponent); // Fixed class name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
