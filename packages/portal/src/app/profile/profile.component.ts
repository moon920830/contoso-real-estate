import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { UserService } from '../shared/user.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule, MatTabsModule]
})
export class ProfileComponent implements OnInit {
  user = {} as any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.currentUser();
    console.log("User: ", this.user);
  }

}
