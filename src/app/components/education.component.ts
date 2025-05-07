import { Component } from '@angular/core';

interface Education {
  level: string;
  institution: string;
  score: string;
  details?: string;
}

@Component({
  selector: 'app-education',
  template: `
    <!-- Education Section -->
    <section>
      <h2 class="text-3xl font-bold text-rose-200 mb-8 text-center">
        Education
      </h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        @for (edu of education; track edu.level) {
          <div class="transparent-card">
            <h3 class="text-xl font-semibold text-rose-300 mb-2">
              {{ edu.level }}
            </h3>
            <p class="text-rose-100 mb-2">{{ edu.institution }}</p>
            <p class="text-rose-200 mb-2">Score: {{ edu.score }}</p>
            @if (edu.details) {
              <p class="text-rose-200 text-sm">{{ edu.details }}</p>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class EducationComponent {
  education: Education[] = [
    {
      level: 'Under Graduate',
      institution: 'KITS (KKR and KSR institute of Technology and Sciences)',
      score: '8.35 CGPA / 10',
    },
    {
      level: 'Intermediate',
      institution: 'Sri Chaitanya',
      score: '94.5%',
    },
    {
      level: 'SSC',
      institution: 'Sri Chaitanya Techno School',
      score: '9.0 CGPA / 10',
    },
  ];
}
