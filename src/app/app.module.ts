import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskManagerModule } from "./features/task-manager/task-manager.module";
import { LayoutModule } from "./layout/layout.module";
import { FontAwesomeIconLibraryModule } from "./libraries/font-awesome-icon-library.module";
import { HomeComponent } from './home/home.component';
import { TaskManagerStatsComponent } from './home/task-manager-stats/task-manager-stats.component';
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import { UsageStatisticsTableComponent } from './home/task-manager-stats/most-active-users-table/usage-statistics-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskManagerStatsComponent,
    UsageStatisticsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskManagerModule,
    LayoutModule,
    FontAwesomeIconLibraryModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
