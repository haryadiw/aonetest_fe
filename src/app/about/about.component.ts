import { Component, OnInit } from '@angular/core';
import { AboutService } from '../service/about/about.service';
import { About } from '../interface/about/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  about: About = <any>{};

  getAbout(){
    this.aboutService.getAbout().subscribe(about => this.about = about);
  }

  constructor(private aboutService : AboutService) {
    
  }

  ngOnInit(): void {
    this.getAbout();
  }

}
