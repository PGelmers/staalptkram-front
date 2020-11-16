import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureUploadRetrieveComponent } from './picture-upload-retrieve.component';

describe('PictureUploadRetrieveComponent', () => {
  let component: PictureUploadRetrieveComponent;
  let fixture: ComponentFixture<PictureUploadRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureUploadRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureUploadRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
