import {Component, Input, OnInit} from '@angular/core';
import {ItemForSale} from '../../model/item-for-sale';
import {ImageService} from '../../services/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: File;
  imageName: any;
  // tslint:disable-next-line:no-input-rename
  @Input('productId')
  productId: number;
  product = new ItemForSale();

  constructor(public imageService: ImageService, public router: Router) {
  }

  // Gets called when the user selects an image
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
  }

  // Gets called when the user clicks on submit to upload the image (through the ImageService)
  onUpload(): void {
    console.log(this.productId);
    this.imageService.save(this.selectedFile, this.productId).subscribe((returnProductID: number) => {
        console.log(returnProductID);
        this.router.navigateByUrl('/fake/' + this.productId);
      }
    );
  }

  ngOnInit(): void {
  }

}
