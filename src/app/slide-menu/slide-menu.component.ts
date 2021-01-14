import { Component, Input, OnInit } from "@angular/core";
import { MenuItem } from "./menu-item";

@Component({
  selector: "app-slide-menu",
  templateUrl: "./slide-menu.component.html",
  styleUrls: ["./slide-menu.component.scss"]
})
export class SlideMenuComponent implements OnInit {
  @Input() title = "Root";
  @Input() menuItems: MenuItem[] = [];
  @Input() showBreadcrumb = true;
  @Input() showActiveItem = true;

  breadCrumb: MenuItem[] = [];
  selectedIndex = 0;
  activeItem: MenuItem = null;

  get currentItems(): MenuItem[] {
    const currentItem = this.breadCrumb[this.selectedIndex];
    return currentItem.items;
  }

  get prevItems(): MenuItem[] {
    if (this.selectedIndex > 0) {
      const currentItem = this.breadCrumb[this.selectedIndex - 1];
      return currentItem.items;
    }
    return [];
  }

  constructor() {}

  ngOnInit() {
    this.breadCrumb.push(this.menuItems[0]);
    this.selectedIndex = 0;
  }

  selectMenuItem(menuItem: MenuItem): void {
    this.activeItem = null;

    if (menuItem.items) {
      this.breadCrumb.push(menuItem);
      this.selectedIndex++;
    } else {
      if (menuItem.action) {
        this.activeItem = menuItem;
        menuItem.action(menuItem);
      }
    }
  }

  goBack(): void {
    this.activeItem = null;
    this.breadCrumb.pop();
    this.selectedIndex--;
  }
}
