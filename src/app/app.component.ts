import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user/user.service';
import { User } from './interface/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'About';
  profile : User = <any>{};

  onChangeLink(page: string){
    this.title = page;
  }

  constructor(private services : UserService) {
    
  }

  getProfile(){
    this.services.getProfile().subscribe(profile => this.profile = profile);
  }

  ngOnInit(): void {
    this.getProfile();
  }


}
