import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // fetch all the users by calling API http://localhost:3000/users

    const configUrl = 'http://localhost:3000/users';

    this.http.get(configUrl).subscribe((data: any[]) => {
      this.users = data;
    });

  }


}
