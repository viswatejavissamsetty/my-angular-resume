import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  startDate?: Date;
  endDate?: Date;
  description: string[];
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  imports: [DatePipe],
  template: `
    <div class="space-y-8 py-6">
      <h2 class="text-3xl font-bold text-blue-200 mb-8 text-center">
        Professional Experience
      </h2>

      <div class="space-y-12">
        @for (exp of experiences; track exp.company) {
          <div class="transparent-card">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
            >
              <div>
                <h3 class="text-2xl font-semibold text-blue-300">
                  {{ exp.company }}
                </h3>
                <p class="text-blue-100 text-lg">{{ exp.role }}</p>
              </div>
              <!-- Show range start date to end date if end date is not provided then its current position -->
              <div class="mt-4 md:mt-0">
                <p class="text-blue-100 text-sm">
                  {{ exp.startDate | date: 'MMM yyyy' }}
                  @if (exp.endDate) {
                    - {{ exp.endDate | date: 'MMM yyyy' }}
                  } @else {
                    - Present
                  }
                </p>
              </div>
            </div>

            <div class="space-y-4">
              @for (desc of exp.description; track desc) {
                <p class="text-blue-50">{{ desc }}</p>
              }

              @if (exp.highlights.length > 0) {
                <div class="mt-6">
                  <h4 class="text-lg font-semibold text-blue-300 mb-3">
                    Key Achievements
                  </h4>
                  <ul class="list-disc list-inside space-y-2">
                    @for (highlight of exp.highlights; track highlight) {
                      <li class="text-blue-50">{{ highlight }}</li>
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Infosys Apple Client',
      role: 'UI Developer',
      startDate: new Date('2024-11-01'),
      description: [
        "Working on Apple's SCI applications, creating various dashboard pages using modern technology stack.",
        'Implemented complex dashboards using Ag-Grid and HighCharts for data visualization.',
        'Utilized Web Workers for complex calculations and NGRX signal store for global state management.',
        'Introduced and trained team members on Angular signals concepts, leading to widespread adoption across projects.',
      ],
      highlights: [
        'Successfully implemented modern UI solutions using latest Angular features',
        'Led technical initiatives in adopting signal-based state management',
        'Optimized performance using Web Workers for complex calculations',
      ],
    },
    {
      company: 'Infosys CareFirst Client',
      role: 'SME - Customer Portal',
      startDate: new Date('2021-03-01'),
      endDate: new Date('2024-10-31'),
      description: [
        'Served as SME for the major customer portal, maintaining and enhancing core functionalities.',
        'Led the modernization initiative to update UI styling according to market trends.',
        'Implemented OKTA authentication and SSO integration for secure access.',
        'Created reusable UI components and utilities to improve team productivity.',
      ],
      highlights: [
        'Successfully modernized legacy application with contemporary UI design',
        'Implemented secure authentication system using OKTA',
        'Developed reusable component library improving team efficiency',
        'Managed project structure and work distribution as SME',
      ],
    },
    {
      company: 'Infosys Training',
      role: 'UI Developer - STG',
      startDate: new Date('2020-11-02'),
      endDate: new Date('2021-01-31'),
      description: [
        'Started career in the Strategic Technology Group (STG), focusing on UI development.',
        'Received comprehensive training in MEAN stack development.',
        'Self-learned ReactJS and NestJS to expand technical expertise.',
        'Contributed to various mini-projects including Library Management System.',
      ],
      highlights: [
        'Rapidly acquired proficiency in multiple modern web technologies',
        'Successfully completed multiple mini-projects demonstrating full-stack capabilities',
        'Provided architectural guidance for startup projects',
      ],
    },
  ];
}
