import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
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
const routes: Routes = [
  {
    path: 'nav',
    component: NavComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'web',
    component: WebComponent,
  },
  {
    path: 'android',
    component: AndroidComponent,
  },
  {
    path: 'design',
    component: DesignComponent,
  },
  {
    path: 'coding',
    component: CodingComponent,
  },
  {
    path: 'academic',
    component: AcademicComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }