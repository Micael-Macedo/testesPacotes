import { AfterViewChecked, Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavItem, NavMenu, SidebarComponent } from 'customcomponents';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewChecked{
  title = 'testesPacotes';
  router = inject(Router)

  ngAfterViewChecked(){
    console.log(this.router.url)
  }

  NavMenus: NavMenu[] =  [
    {
    title: "Main",
      navItens: [
        {name: 'Home', route: '/', img: "assets/svg/house.svg"},
        {name: 'Documentations', route: '/documentation',  img: "assets/svg/folder.svg"},
        {name: 'Map Overview', route: '/map', img: "assets/svg/map.svg"},
        {name: 'Statistics', route: '/statistics', img: "assets/svg/pie-chart.svg"},
      ]
    },
    {
    title: "Communication",
      navItens: [
        {name: 'Inbox', route: '/inbox', img: "assets/svg/folder.svg"},
        {name: 'Couriers', route: '/couries',  img: "assets/svg/people.svg"},
      ]
    },
  ]
}
