import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark-manager';
  isMenuOpen = false;
  activeTab: string = 'panel-1'; 

  selectTab(tab: string): void {
    this.activeTab = tab; 
  }

  navToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  

}

