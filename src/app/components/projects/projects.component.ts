import { Component } from '@angular/core';

interface Project {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Raizen - Sales Pipeline Management',
      period: '2023 - Present',
      description: 'A comprehensive sales pipeline management system designed to streamline lead tracking, deal management, and sales forecasting with real-time data visualization and role-based access control.',
      techStack: ['Angular', 'Node.js', 'MySQL', 'REST API'],
      achievements: [
        'Implemented RBAC for multi-level user management',
        'Built interactive dashboards with real-time sales metrics',
        'Optimized MySQL queries reducing load time by 40%',
        'Integrated push notifications for deal status updates'
      ]
    },
    {
      title: 'Sales Channel - Data Optimization Module',
      period: '2023',
      description: 'A data optimization module for sales channel operations, focusing on efficient data processing, server-side pagination, and API performance optimization for handling large datasets.',
      techStack: ['Angular', 'PHP', 'MySQL', 'REST API'],
      achievements: [
        'Server-side pagination handling 100K+ records',
        'Optimized API response times by 60%',
        'Built data export with customizable filters',
        'Implemented caching strategies for frequent data'
      ]
    },
    {
      title: 'Channel Manager Application',
      period: '2022 - 2023',
      description: 'A channel management application enabling businesses to manage multiple distribution channels from a single interface with inventory sync, order management, and performance analytics.',
      techStack: ['AngularJS', 'Node.js', 'MySQL', 'REST API'],
      achievements: [
        'Designed responsive UI with Angular Material',
        'Built comprehensive reporting dashboard',
        'Real-time inventory synchronization across channels',
        'RESTful APIs with authentication & rate limiting'
      ]
    }
  ];
}
