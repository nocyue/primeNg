import {NgModule,Component,Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {Location} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'p-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [ './breadcrumb.component.css' ]
})
export class BreadcrumbComponent {

  @Input() model: MenuItem[];

  @Input() style: any;

  @Input() styleClass: string;
  
  @Input() home: MenuItem;
      
  itemClick(event, item: MenuItem) {
    if(item.disabled) {
      event.preventDefault();
      return;
    }
    
    if(!item.url) {
      event.preventDefault();
    }
    
    if(item.command) {            
      item.command({
          originalEvent: event,
          item: item
      });
    }
  }
  
  onHomeClick(event) {
    if(this.home) {
      this.itemClick(event, this.home);
    }
  }
}