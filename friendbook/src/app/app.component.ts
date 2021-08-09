import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  allFriends: any;

  constructor(private addFriendService: AddFriendService) { }

  languages = [{ name: "HTML", id: 1 }, { name: "CSS", id: 2 }, { name: "JS", id: 3 }, { name: "PHP", id: 4 }];
  friendModel = new Friend("", "", "", "", "");
  async fetchAsync(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      return res.json()
    })
    .then(data => this.allFriends = data);
    return;
  }

  ngOnInit(): any{
    this.fetchAsync('http://localhost:3000/allFriends')
  }

  submitDetails() {
    console.log(this.friendModel);
   // Call the addFriend method of the addFriendService and pass the friend data to it.
    let observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(data => console.log("it worked"),
      error => console.log("it didn't work"));

      this.fetchAsync('http://localhost:3000/allFriends');

  }
 
}
