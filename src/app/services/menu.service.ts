import { Injectable } from '@angular/core';

export interface IMenu {
  title:string,
  url:string,
  icon:string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private listMenu:IMenu[] = [
    {title:'Agencias',url:'/agencias',icon:'/assets/icons/channel.svg'},
    {title:'Canales',url:'/canales',icon:'/assets/icons/channel.svg'},
    {title:'Clientes',url:'/clientes',icon:'/assets/icons/client.svg'},
    {title:'Mecánicos',url:'/mecanicos',icon:'/assets/icons/mechanic.svg'},
    {title:'Mantenimientos',url:'/mantenimientos',icon:'/assets/icons/maintenance.svg'},
    {title:'Seguimiento',url:'/seguimiento',icon:'/assets/icons/follow-up.svg'},
    {title:'Tipo de Mantenimiento',url:'/tipo-mantenimiento',icon:'/assets/icons/type-maintenance.svg'},
  ]

  constructor() { }

  getMenu():IMenu[] {
    return[...this.listMenu]
  }

  getMenuByUrl(url:string):IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu
  }

}
