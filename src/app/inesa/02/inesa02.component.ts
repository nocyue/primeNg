import { Component } from '@angular/core';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
	templateUrl: './inesa02.component.html',
})
export class Inesa02Component {
	private items: MenuItem[];
  comprehensiveData = 95.1;
  degreeData: number;
  goodYieldData: number;
  mobilityData: number;
  cricleLength: number;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'logo'},
      {label:'上海仪电显示材料有限公司'},
      {label:'工厂'},
    ];
    this.comprehensiveData = 95.1;
    this.degreeData = 83.3;
    this.goodYieldData = 88.1;
    this.mobilityData = 75.6
    this.cricleLength = 60;
  }
}