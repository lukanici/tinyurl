import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenUrlComponent } from './shorten-url.component';

describe('ShortenUrlComponent', () => {
  let component: ShortenUrlComponent;
  let fixture: ComponentFixture<ShortenUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
