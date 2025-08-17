import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  items : MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: '/about',
      badge: 'New',
    },
    {
      label: 'List',
      icon: 'pi pi-envelope',
      routerLink: '/list'
    },
    {
      label: 'Add',
      icon: 'pi pi-user',
      routerLink: '/add'
    },
    {
      label: 'Login',
      icon: 'pi pi-user-plus',
      routerLink: '/'
    }
  ]
 }
