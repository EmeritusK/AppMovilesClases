import { Component } from '@angular/core';
import { IMenu, MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  path: IMenu;

  constructor(
    private activeRoute: ActivatedRoute,
    private menuService: MenuService
  ){
    const currentPage = '/'+this.activeRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getMenuByUrl(currentPage);
  }
}
