import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactItems = [
    { icon: 'email', label: 'Email', value: 'preethi.dev@email.com', href: 'mailto:preethi.dev@email.com' },
    { icon: 'link', label: 'LinkedIn', value: 'linkedin.com/in/preethi', href: 'https://linkedin.com/in/preethi' },
    { icon: 'code', label: 'GitHub', value: 'github.com/preethi', href: 'https://github.com/preethi' },
    { icon: 'location_on', label: 'Location', value: 'India', href: '' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    // Form submission logic
    console.log('Form submitted:', this.formData);
  }
}
