import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
	templateUrl: './inesa01.component.html',
})
export class Inesa01Component implements OnInit {
	items: MenuItem[];
	home: MenuItem;
	styleClass: string;
	style: any;
	ringStyle: any;
	height: string;
	ngOnInit() {
		this.home = {};
		this.items = [
      {label:'上海仪电显示材料有限公司'},
      {label:'工厂'},
		];
		this.styleClass = '';
		this.style = {
			'background': '#104E8B'
		};
		this.ringStyle = {
			'width': '100px',
			'height': '100px'
		};
		this.height = '300'
	}
}