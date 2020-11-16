import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-picture-upload-retrieve',
  templateUrl: './picture-upload-retrieve.component.html',
  styleUrls: ['./picture-upload-retrieve.component.css']
})
export class PictureUploadRetrieveComponent implements OnInit {
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message: string;
  imageName: any;
  imageID: number;

  constructor(private httpClient: HttpClient) { }

  // Gets called when the user selects an image
  public onFileChanged(event): void {
    // Select File
    this.selectedFile = event.target.files[0];
  }

  // Gets called when the user clicks on submit to upload the image
  onUpload(): void {
    console.log(this.selectedFile);

    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    // Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );
  }

  // Gets called when the user clicks on retrieve image button to get the image from back end
  getImage(): void {
    // Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageID)
      .subscribe(
        res => {
          this.retrieveResponse = res;
          this.base64Data = this.retrieveResponse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  ngOnInit(): void {  }
}