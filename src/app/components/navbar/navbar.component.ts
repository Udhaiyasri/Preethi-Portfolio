import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  navLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Experience', section: 'experience' },
    { label: 'Contact', section: 'contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
    this.updateActiveSection();
  }

  scrollTo(sectionId: string): void {
    this.isMobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  private updateActiveSection(): void {
    for (const link of [...this.navLinks].reverse()) {
      const el = document.getElementById(link.section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection = link.section;
          break;
        }
      }
    }
  }
}
