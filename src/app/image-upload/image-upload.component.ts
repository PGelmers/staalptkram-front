import { Component, OnInit } from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: File;
  message: string;
  imageName: any;
  productID: number;
  product = new ItemForSale();

  constructor(public imageService: ImageService) {
  }

  // Gets called when the user selects an image
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
  }

  // Gets called when the user clicks on submit to upload the image (through the ImageService)
  onUpload(): void {
    this.imageService.save(this.selectedFile, this.productID).subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
    );
  }

  ngOnInit(): void {

  }
}
