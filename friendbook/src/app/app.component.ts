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

  submitDetails() {
    console.log(this.friendModel);
    //Call the addFriend method of the addFriendService and pass the friend data to it.
    let observable = this.addFriendService.addFriend(this.friendModel);
    observable.subscribe(data => console.log("it worked"),
      error => console.log("it didn't work"));

      this.fetchAsync('http://localhost:9005/allFriends');

  }

  // only deletes the user from the view, not from the server. MUST CHANGE THIS!
    toggle(event:any) {
  
      let id = event.target.id;
      const result = this.allFriends.findIndex((e: any) => e.email ===id);
      console.log(result);
      this.allFriends.splice(result, 1);

   }


  async fetchAsync(url: string): Promise<any> {
    let response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });
    let data = await response.json();
    this.allFriends = data;

    return this.allFriends ; 
   // console.log(this.allFriends)
  }

  ngOnInit(): any {
    console.log(this.fetchAsync('http://localhost:9005/allFriends'));
  }

}
