import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObsComponent } from './test-obs.component';

describe('TestObsComponent', () => {
  let component: TestObsComponent;
  let fixture: ComponentFixture<TestObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestObsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
