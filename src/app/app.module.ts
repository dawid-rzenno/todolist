import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskManagerModule } from "./features/task-manager/task-manager.module";
import { LayoutModule } from "./layout/layout.module";
import { FontAwesomeIconLibraryModule } from "./libraries/font-awesome-icon-library.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TaskManagerModule,
    LayoutModule,
    FontAwesomeIconLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
