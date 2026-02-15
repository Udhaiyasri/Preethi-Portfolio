import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'web',
      skills: ['Angular', 'AngularJS', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Backend',
      icon: 'dns',
      skills: ['Node.js', 'PHP', 'Express.js', 'REST APIs']
    },
    {
      title: 'Database',
      icon: 'storage',
      skills: ['MySQL', 'Query Optimization', 'Database Design']
    },
    {
      title: 'Concepts & Tools',
      icon: 'lightbulb',
      skills: ['RBAC', 'Pagination', 'Performance Optimization', 'Agile/Scrum', 'Git', 'Postman']
    }
  ];
}
