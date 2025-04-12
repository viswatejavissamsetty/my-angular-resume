import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  level: string;
  institution: string;
  score: string;
  details?: string;
}

interface Certification {
  platform: string;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-12 py-6">
      <!-- Education Section -->
      <section>
        <h2 class="text-3xl font-bold text-primary-500 mb-8 text-center">Education</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (edu of education; track edu.level) {
            <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 class="text-xl font-semibold text-primary-400 mb-2">{{ edu.level }}</h3>
              <p class="text-gray-300 mb-2">{{ edu.institution }}</p>
              <p class="text-gray-400 mb-2">Score: {{ edu.score }}</p>
              @if (edu.details) {
                <p class="text-gray-400 text-sm">{{ edu.details }}</p>
              }
            </div>
          }
        </div>
      </section>

      <!-- Certifications Section -->
      <section>
        <h2 class="text-3xl font-bold text-primary-500 mb-8 text-center">Certifications</h2>
        <div class="space-y-6">
          @for (cert of certifications; track cert.platform) {
            <div class="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 class="text-xl font-semibold text-primary-400 mb-2">{{ cert.platform }}</h3>
              <p class="text-gray-300 mb-2">{{ cert.name }}</p>
              @if (cert.description) {
                <p class="text-gray-400 text-sm">{{ cert.description }}</p>
              }
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class CertificationsComponent {
  education: Education[] = [
    {
      level: 'Under Graduate',
      institution: 'KITS (KKR and KSR institute of Technology and Sciences)',
      score: '8.35 CGPA / 10'
    },
    {
      level: 'Intermediate',
      institution: 'Sri Chaitanya',
      score: '94.5%'
    },
    {
      level: 'SSC',
      institution: 'Sri Chaitanya Techno School',
      score: '9.0 CGPA / 10'
    }
  ];

  certifications: Certification[] = [
    {
      platform: 'Udemy',
      name: 'Node JS Cluster with PM2, RabbitMQ, Redis and Nginx'
    },
    {
      platform: 'Udemy',
      name: 'Tailwind CSS From Scratch | Learn By Building Projects'
    },
    {
      platform: 'Udemy',
      name: 'MongoDB - The Complete Developer\'s Guide 2025'
    },
    {
      platform: 'Udemy',
      name: 'Unit Testing for Typescript & NodeJs Developers with Jest'
    },
    {
      platform: 'Udemy',
      name: 'Generative AI for Beginners'
    },
    {
      platform: 'Simplilearn',
      name: 'AI Masters certification',
      description: 'Comprehensive study of AI concepts including initial exposure to NLP and deep learning fundamentals.'
    },
    {
      platform: 'NPTEL',
      name: 'Programming, Data Structures And Algorithms Using Python'
    },
    {
      platform: 'NPTEL',
      name: 'Introduction To Internet Of Things'
    }
  ];
}