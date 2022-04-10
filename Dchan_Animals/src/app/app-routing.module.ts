import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentListComponent } from './content-list/content-list.component';


const routes: Routes =[
  {
    path:"",
    component:HomeComponent
  },
  {
    path: "content/:id",component: ContentDetailComponent
  },
  {
    path:"content",
    component: ContentListComponent
  },
  {
    path: "**", component:PageNotFoundComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
