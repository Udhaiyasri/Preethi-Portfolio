import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('0.8s 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.8s 0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  fullText = 'I build scalable web applications with clean, efficient code.';
  private typingIndex = 0;
  private typingTimer: any;
  particles: { x: number; y: number; size: number; duration: number; delay: number }[] = [];

  ngOnInit(): void {
    this.startTyping();
    this.generateParticles();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  private startTyping(): void {
    if (this.typingIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.typingIndex);
      this.typingIndex++;
      this.typingTimer = setTimeout(() => this.startTyping(), 45);
    }
  }

  private generateParticles(): void {
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4
      });
    }
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
