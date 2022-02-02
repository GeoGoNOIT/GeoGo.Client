import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameDetailsComponent } from './create-game-details.component';

describe('CreateGameDetailsComponent', () => {
  let component: CreateGameDetailsComponent;
  let fixture: ComponentFixture<CreateGameDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGameDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
