import {User} from './user';
import {Review} from './review';

export class Book {

   id: number;


   name: string;


   genre: string;


   price: number;


   releaseDate: string;


   author: string;


   publisher: string;


  createdAt: Date;


  updatedAt: Date;


   reviews: Review[];


  user: User;

}
