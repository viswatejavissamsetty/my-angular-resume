import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificationsComponent,
  ],
  template: `
    <div class="space-y-16">
      <section
        id="about"
        class="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-lg p-6 shadow-xl"
      >
        <app-home></app-home>
      </section>

      <section
        id="experience"
        class="bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 rounded-lg p-6 shadow-xl"
      >
        <app-experience></app-experience>
      </section>

      <section
        id="skills"
        class="bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 rounded-lg p-6 shadow-xl"
      >
        <app-skills></app-skills>
      </section>

      <section
        id="certifications"
        class="bg-gradient-to-br from-rose-900 via-pink-900 to-rose-800 rounded-lg p-6 shadow-xl"
      >
        <app-certifications></app-certifications>
      </section>
    </div>
  `,
})
export class MainComponent {}
