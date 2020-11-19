import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ItemForSale} from '../model/item-for-sale';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  save(imageFile: File, productID: number) {
    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', imageFile, imageFile.name);
    uploadImageData.append('productID', '' + productID);

    // Make a call to the Spring Boot Application to save the image
    return this.httpClient.post('http://localhost:8080/image/upload', uploadImageData);
  }

}
