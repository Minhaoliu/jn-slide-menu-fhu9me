import { Component } from '@angular/core';
import { MenuItem } from './slide-menu/menu-item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Templates';
  menuItems: MenuItem[] = [
    {
      label: 'Templates',
      icon: 'check',
      items: [
        {
          label: 'Process 1',
          icon: 'check',
          items: [
            {
              label: 'Task 1',
              icon: 'check',
              items: [
                {
                  label: 'Form 1',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 2',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            },
            {
              label: 'Task 2',
              icon: 'check',
              items: [
                {
                  label: 'Form 3',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 4',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            }
          ]
        },
        {
          label: 'Process 2',
          icon: 'check',
          items: [
            {
              label: 'Task 3',
              icon: 'check',
              items: [
                {
                  label: 'Form 5',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 6',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            },
            {
              label: 'Task 4',
              icon: 'check',
              items: [
                {
                  label: 'Form 7',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 8',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            }
          ]
        },
        {
          label: 'Process 3',
          icon: 'check',
          items: [
            {
              label: 'Task 5',
              icon: 'check',
              items: [
                {
                  label: 'Form 9',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 10',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            },
            {
              label: 'Task 6',
              icon: 'check',
              items: [
                {
                  label: 'Form 11',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                },
                {
                  label: 'Form 12',
                  icon: 'check',
                  action: menuItem => console.log(menuItem)
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}
