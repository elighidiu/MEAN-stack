import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const ObjectId = require('mongoose').Types.ObjectId;

@Injectable({
  providedIn: 'root'
})
export class DeleteFriendService {
  url = "http://localhost:3000/deleteFriend";
  
  constructor(private http: HttpClient) { }

    // Delete Friend
    deleteFriend(id: typeof ObjectId): Observable<any> {
      let url = `${this.url}/${id}`;
      return this.http.delete<void>(url)
      
    }
  
}