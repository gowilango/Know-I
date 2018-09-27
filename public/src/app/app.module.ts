import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material 
import { MaterialModule } from './material/material.module';
// bootstrap for angular (for some components)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// routing module 
import { AppRoutingModule } from './app-routing.module';
// angular flex
import { FlexLayoutModule } from "@angular/flex-layout";
// components 
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { GroupsComponent } from './groups/groups.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebComponent } from './groups/web/web.component';
import { AndroidComponent } from './groups/android/android.component';
import { DesignComponent } from './groups/design/design.component';
import { CodingComponent } from './groups/coding/coding.component';
import { AcademicComponent } from './groups/academic/academic.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule.forRoot(),
    FlexLayoutModule

  ],
  declarations: [
    // newly created components should come here
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    GroupsComponent,
    AboutComponent,
    MembersComponent,
    BlogComponent,
    GalleryComponent,
    WebComponent,
    AndroidComponent,
    DesignComponent,
    CodingComponent,
    AcademicComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
