import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  fadeInAnimation,
  fadeInUpAnimation,
  skillBarAnimation,
} from '../../shared/animations';

interface Skill {
  name: string;
  rating: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation, fadeInUpAnimation, skillBarAnimation],
  template: `
    <div class="space-y-8 py-6" @fadeIn>
      <h2 class="text-3xl font-bold text-primary-500 mb-8 text-center">
        Technical Skills
      </h2>

      <div class="space-y-12">
        @for (category of skillCategories; track category.name) {
          <section class="bg-gray-800 rounded-lg p-6 shadow-lg" @fadeInUp>
            <h3 class="text-2xl font-semibold text-primary-400 mb-6">
              {{ category.name }}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (skill of category.skills; track skill.name) {
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-200">{{ skill.name }}</span>
                    <span class="text-primary-500">{{ skill.rating }}/5</span>
                  </div>
                  <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-primary-500 rounded-full"
                      @skillBar
                      [style.width.%]="(skill.rating / 5) * 100"
                    ></div>
                  </div>
                </div>
              }
            </div>
          </section>
        }
      </div>
    </div>
  `,
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      name: 'Core Technologies',
      skills: [
        { name: 'Angular', rating: 4 },
        { name: 'React', rating: 4 },
        { name: 'NestJS', rating: 4 },
        { name: 'ExpressJS', rating: 4 },
        { name: 'node-red', rating: 4 },
        { name: 'MongoDB', rating: 4 },
        { name: 'FastAPI', rating: 2 },
        { name: 'Flask', rating: 3 },
        { name: 'React Emails', rating: 3 },
        { name: 'React Native - Expo', rating: 4 },
      ],
    },
    {
      name: 'Libraries & Frameworks',
      skills: [
        { name: 'Ag Grid Angular/React', rating: 4 },
        { name: 'Highcharts Angular', rating: 4 },
        { name: 'Tailwind CSS', rating: 4 },
        { name: 'Bootstrap', rating: 4 },
        { name: 'Material UI / Angular Material', rating: 4 },
        { name: 'Tanstack Query', rating: 4 },
        { name: 'NGRX Signal Store', rating: 4 },
        { name: 'Zustand', rating: 4 },
        { name: 'React Hook Form', rating: 4 },
        { name: 'PrimeNG/PrimeReact', rating: 3 },
      ],
    },
    {
      name: 'Programming Languages',
      skills: [
        { name: 'JavaScript/TypeScript', rating: 4 },
        { name: 'Python', rating: 4 },
        { name: 'Java', rating: 3 },
        { name: 'C/C++', rating: 2 },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'VSCode', rating: 4 },
        { name: 'Redis Cache', rating: 3 },
        { name: 'Git/GitHub', rating: 3 },
        { name: 'Docker', rating: 3 },
        { name: 'PM2', rating: 3 },
        { name: 'Postman', rating: 4 },
        { name: 'Nginx', rating: 3 },
        { name: 'GitHub Actions', rating: 3 },
      ],
    },
    {
      name: 'Authentication & Security',
      skills: [
        { name: 'Okta Authentication', rating: 3 },
        { name: 'Azure Entra Authentication', rating: 3 },
        { name: 'JWT Authentication', rating: 4 },
        { name: 'RSA/AES Encryption', rating: 4 },
      ],
    },
  ];
}
