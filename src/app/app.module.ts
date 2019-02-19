import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WestPanelComponent } from './west-panel/west-panel.component';
import { EastPanelComponent } from './east-panel/east-panel.component';
import { GroupsComponent } from './groups/groups.component';
import { AddGroupComponent } from './add-group/add-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    WestPanelComponent,
    EastPanelComponent,
    GroupsComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
