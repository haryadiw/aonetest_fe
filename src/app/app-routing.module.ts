import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    title: 'About',
},
{
    path: 'user-list',
    component: UserListComponent,
    title: 'User List'
},
{
    path: 'user-detail/:id',
    component: UserDetailComponent,
    title: 'User Detail'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
