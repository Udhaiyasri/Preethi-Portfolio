import { Component } from '@angular/core';

interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      icon: 'dashboard',
      title: 'Dashboard Development',
      description: 'Built interactive, data-driven dashboards with real-time metrics and KPI tracking.',
      highlights: [
        'Real-time sales metrics visualization',
        'Custom chart components with Angular',
        'Dynamic data filtering and export'
      ]
    },
    {
      icon: 'table_rows',
      title: 'Server-Side Pagination',
      description: 'Implemented efficient server-side pagination and filtering for large datasets.',
      highlights: [
        'Handling 100K+ records efficiently',
        'Lazy loading and virtual scrolling',
        'Custom pagination components'
      ]
    },
    {
      icon: 'bolt',
      title: 'MySQL Query Optimization',
      description: 'Optimized complex MySQL queries achieving significant performance improvements.',
      highlights: [
        '60% reduction in query execution time',
        'Index optimization and query restructuring',
        'Database schema improvements'
      ]
    },
    {
      icon: 'notifications_active',
      title: 'Push Notification Integration',
      description: 'Integrated real-time push notification systems for business-critical updates.',
      highlights: [
        'Real-time deal status notifications',
        'Configurable notification preferences',
        'Cross-platform notification delivery'
      ]
    },
    {
      icon: 'loop',
      title: 'Agile Development',
      description: 'Actively participated in Agile/Scrum workflows delivering iterative releases.',
      highlights: [
        'Sprint planning and estimation',
        'Code reviews and pair programming',
        'Continuous integration and delivery'
      ]
    }
  ];
}
