import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
   url = "http://localhost:9005/allFriends";
   
  constructor(private http:  HttpClient) { 
   }

  addFriend(friend: Friend){
   return this.http.post(this.url, friend);
  }

  // deleteFriend(email: string): Observable<void>{
  //   return this.http.delete<void>(`${this.url}/${email}`)
  //  }
}
