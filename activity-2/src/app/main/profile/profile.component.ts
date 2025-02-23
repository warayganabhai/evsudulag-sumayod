import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
