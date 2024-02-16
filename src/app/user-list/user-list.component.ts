import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user/user';
import { UserService } from '../service/user/user.service';
import { Usertable } from '../interface/user/usertable';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: Usertable = <any>{};
  current_page: number = 1;

  constructor(private services: UserService) {

  }

  getUsers() {
    this.services.getUsers(this.current_page).subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onPagePrev() {
    if (this.current_page > 1) {
      this.current_page -= 1;
      this.getUsers();
    }
  }

  onPageNext(total_page : number) {
    if (this.current_page < total_page) {
      this.current_page += 1;
      this.getUsers();
    }
  }

}
