import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';


@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
   url = "http://localhost:3000/addFriend";
   
  constructor(private http:  HttpClient) { 
   }

  addFriend(friend: Friend){
   return this.http.post(this.url, friend);
  }

  // deleteFriend(email: string): Observable<void>{
  //   return this.http.delete<void>(`${this.url}/${email}`)
  //  }
}
