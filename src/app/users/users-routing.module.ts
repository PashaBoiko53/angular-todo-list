import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersInfoComponent } from './users-info/users-info.component';

const routes: Routes = [
  { path: '', component: UsersInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }