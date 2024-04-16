import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeImagesComponent } from './mange-images.component';

describe('MangeImagesComponent', () => {
  let component: MangeImagesComponent;
  let fixture: ComponentFixture<MangeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
