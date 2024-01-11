import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "../app-routing.module";
import { MatMenuModule } from "@angular/material/menu";
import { FontAwesomeIconLibraryModule } from "../libraries/font-awesome-icon-library.module";

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    FontAwesomeIconLibraryModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
