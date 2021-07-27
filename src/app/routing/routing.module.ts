
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WhiteComponent } from './../components/white/white.component';
import { BlueComponent } from '../components/blue/blue.component';

const routes: Routes = [
  {path: 'White', component: WhiteComponent},
  {path: '', redirectTo: '/White', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
