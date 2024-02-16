import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../interface/user/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{

  user: User = <any>{};

  constructor(
    private route: ActivatedRoute,
    private services : UserService
  ) {}

  getUsersDetail(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.services.getUserDetail(id).subscribe(user => this.user = user);
  }

  ngOnInit(): void {

    this.getUsersDetail();
    
  }



}
