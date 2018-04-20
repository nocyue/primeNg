import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InesaComponent } from './inesa/inesa.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inesa',
    pathMatch: 'full',
  },
	{
		path: 'inesa',
		component: InesaComponent,
    children: [
      {
        path: '',
        loadChildren: './inesa/inesa.module#InesaModule'
      }
    ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash:true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }