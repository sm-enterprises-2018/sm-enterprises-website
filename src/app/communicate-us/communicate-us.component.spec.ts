import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateUsComponent } from './communicate-us.component';

describe('CommunicateUsComponent', () => {
  let component: CommunicateUsComponent;
  let fixture: ComponentFixture<CommunicateUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicateUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
