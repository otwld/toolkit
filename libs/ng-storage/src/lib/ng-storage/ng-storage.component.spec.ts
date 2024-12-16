import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgStorageComponent } from './ng-storage.component';

describe('NgStorageComponent', () => {
  let component: NgStorageComponent;
  let fixture: ComponentFixture<NgStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStorageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
