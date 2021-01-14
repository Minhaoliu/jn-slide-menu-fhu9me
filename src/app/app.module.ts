import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCommonModule, MatButtonModule, MatIconModule, MatListModule, MatDividerModule } from '@angular/material';
import { AppComponent } from './app.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { MenuItemListComponent } from './slide-menu/menu-item-list/menu-item-list.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatCommonModule, 
    MatButtonModule, 
    MatIconModule, 
    MatListModule,
    MatDividerModule
  ],
  declarations: [ 
    AppComponent, 
    SlideMenuComponent, MenuItemListComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
