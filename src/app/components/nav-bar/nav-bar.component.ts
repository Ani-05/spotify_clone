import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { searchBarService } from '../../services/searchbar.services';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'

})
export class NavBarComponent implements OnInit {
  public isSearchFieldVisible: boolean = false;

  constructor(private router: Router, private sb: searchBarService) {}

  ngOnInit(): void {
    // Subscribe to search visibility changes
    this.sb.searchVisibility$.subscribe(status => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateLogin() {
    this.router.navigate(['/login']);
  }
}