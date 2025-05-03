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
        class="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-purple-800 rounded-lg p-6 shadow-xl"
      >
        <app-home></app-home>
      </section>

      <section
        id="experience"
        class="bg-gradient-to-br from-sky-900 via-indigo-900 to-blue-800 rounded-lg p-6 shadow-xl"
      >
        <app-experience></app-experience>
      </section>

      <section
        id="skills"
        class="bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-800 rounded-lg p-6 shadow-xl"
      >
        <app-skills></app-skills>
      </section>

      <section
        id="certifications"
        class="bg-gradient-to-br from-pink-900 via-rose-900 to-orange-800 rounded-lg p-6 shadow-xl"
      >
        <app-certifications></app-certifications>
      </section>
    </div>
  `,
})
export class MainComponent {}
