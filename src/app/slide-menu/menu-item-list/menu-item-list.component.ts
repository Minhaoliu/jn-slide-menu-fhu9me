import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css'],
    animations: [
    trigger('slide', [
      state('current', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(0)' })),
      state('left', style({ transform: 'translateX(0)' })),
      transition('current => right', [
        style({ transform: 'translateX(100%)' }),
        animate(300)
      ]),
      transition('current => left', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
    ])
  ]
})
export class MenuItemListComponent {
  @Input() showBack: boolean = false;
  @Input() menuItems: MenuItem[] = [];

  @Output() itemSelected = new EventEmitter<MenuItem>();
  @Output() backSelected = new EventEmitter<void>();

  animState = 'current';

  constructor() { }

  selectItem(item: MenuItem): void {
    if (item.items) {
      this.animState = 'right';
    }
    this.itemSelected.emit(item);
  }

  goBack(): void {
    this.backSelected.emit();
    this.animState = 'left';
  }

  resetState(): void {
    this.animState = 'current';
  }
}