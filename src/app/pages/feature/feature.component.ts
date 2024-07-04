import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit{

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  
  closeHamburgerMenu(): void {
    const navbar = document.getElementById('navbarNavAltMarkup');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
