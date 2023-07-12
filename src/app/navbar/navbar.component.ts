import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dialogVisible = false;

  openDialog(): void {
    this.dialogVisible = true;
  }

  navigateToUserPostList(username: string): void {
    // Replace this line with your navigation logic to the UserPostListComponent
    console.log(`Navigating to post list of user: ${username}`);
    this.dialogVisible = false; // Close the dialog
  }
}
