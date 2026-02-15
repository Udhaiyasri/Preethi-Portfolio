import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { icon: 'work_outline', value: '2+', label: 'Years Experience' },
    { icon: 'code', value: '5+', label: 'Projects Delivered' },
    { icon: 'verified', value: '98%', label: 'Success Rate' },
    { icon: 'group', value: '10+', label: 'Clients Served' }
  ];

  details = [
    { icon: 'person', label: 'Name', value: 'Preethi' },
    { icon: 'email', label: 'Email', value: 'preethi.dev@email.com' },
    { icon: 'location_on', label: 'Location', value: 'India' },
    { icon: 'translate', label: 'Languages', value: 'English, Tamil' }
  ];
}
