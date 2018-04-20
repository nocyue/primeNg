import { NgModule } from '@angular/core';

import { BreadcrumbModule } from '../common/breadcrumb/breadcrumb.module';
import { SidebarModule } from 'primeng/sidebar';

import { InesaRoutingModule } from './inesa-routing.module';
import { RingModule } from '../common/ring/ring.module';

import { Inesa01Component } from './01/inesa01.component';
import { Inesa02Component } from './02/inesa02.component';


@NgModule({
	declarations: [
		Inesa01Component,
		Inesa02Component
	],
	imports: [
		BreadcrumbModule,
		SidebarModule,
		InesaRoutingModule,
		RingModule
	],
})
export class InesaModule { }
