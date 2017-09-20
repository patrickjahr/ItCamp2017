import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsDetailComponent } from './starwars-detail.component';

describe('StarwarsDetailComponent', () => {
  let component: StarwarsDetailComponent;
  let fixture: ComponentFixture<StarwarsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarwarsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
