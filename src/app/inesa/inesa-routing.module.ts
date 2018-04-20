import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inesa01Component } from './01/inesa01.component';
import { Inesa02Component } from './02/inesa02.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '01',
		pathMatch: 'full'
	},
  {
    path: '01',
    component: Inesa01Component,
  },
  {
    path: '02',
    component: Inesa02Component,
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InesaRoutingModule { }