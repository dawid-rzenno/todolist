import { Component } from '@angular/core';
import { HeaderLinkInterface } from "./header-link.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly Items: HeaderLinkInterface[] = [
    {
      label: 'Task Manager',
      routerLink: ['task-manager']
    }
  ];
}
