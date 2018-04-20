import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RingComponent } from './ring.component';

@NgModule({
	declarations: [
		RingComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		RingComponent
	]
})
export class RingModule { }