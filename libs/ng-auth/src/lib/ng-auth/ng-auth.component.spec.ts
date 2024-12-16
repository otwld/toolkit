import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAuthComponent } from './ng-auth.component';

describe('NgAuthComponent', () => {
  let component: NgAuthComponent;
  let fixture: ComponentFixture<NgAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
