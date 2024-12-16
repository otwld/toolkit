import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgStorybookComponent } from './ng-storybook.component';

describe('NgStorybookComponent', () => {
  let component: NgStorybookComponent;
  let fixture: ComponentFixture<NgStorybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStorybookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
