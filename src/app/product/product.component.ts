import { Component } from '@angular/core';
import { Product } from '../models/product';
import { Course } from '../models/course';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
//  Property Binding 
// isAvailable : boolean = false ;
// source : string = "/assets/bck.jpg";
// width = 500;
// height = 500;


    products: Product[] = [
      {id: 1, productName: 'samsung M34', description: 'Description 1', price: 100.993, rating: 5.935, addedDate: new Date(2023,1,12)},
      {id: 2, productName: 'iPhone 12 pro', description: 'Description 2', price: 200, rating: 4, addedDate: new Date("06/08/2022")},
      {id:  3, productName: 'Xiamoi 12 Pro', description: 'Description 2', price: 200, rating: 4, addedDate: new Date("06/08/2022")},
      {id: 4, productName: 'iPhone 14 Pro', description: 'Description 2', price: 200, rating: 4, addedDate: new Date("06/08/2022")},
      {id: 5, productName: 'Realme Note Pro', description: 'Description 2', price: 200, rating: 4, addedDate: new Date("06/08/2022")},
      {id: 6, productName: '', description: 'Description 2', price: 200, rating: 4, addedDate: new Date("06/08/2022")},

    ];

    courses : Course[]=[
      {courseId: 1, courseName: 'samsung M34', price: 22, description: "full stack", rating: 5.935},
      {courseId: 2, courseName: 'React', price: 22000, description: "full stack training ", rating: 5.935},
      {courseId: 3, courseName: 'Angular', price: 10000, description: "frontend", rating: 5.935},
      {courseId: 4, courseName: 'Vue', price: 0, description: "Single Page", rating: 5.935},
      {courseId: 5, courseName: 'Firebase', price: 122, description: "Backend", rating: 5.935},

    ]
}
