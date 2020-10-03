import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { AppService } from './services/app-service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TechnologyComponent } from './components/technology/technology.component';
import { FeaturesDialogComponent } from './components/features-dialog/features-dialog.component';
import { LikesDialogComponent } from './components/likes-dialog/likes-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContributorsComponent,
    NavbarComponent,
    TechnologyComponent,
    FeaturesDialogComponent,
    LikesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
