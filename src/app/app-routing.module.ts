import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "**", component: E404Component }
 
];

// const routes: Routes = [
//   { path: "", redirectTo: "/users/list", pathMatch: "full" },
//   //starts up user list automatically when app starts
//   { path: "users/list", component: UserListComponent },
//   { path: "users/edit/:id", component: UserEditComponent }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

