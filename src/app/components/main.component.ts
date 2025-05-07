import { Component } from '@angular/core';
import { CertificationsComponent } from './certifications.component';
import { ExperienceComponent } from './experience.component';
import { HomeComponent } from './home.component';
import { SkillsComponent } from './skills.component';
import { EducationComponent } from './education.component';

@Component({
  selector: 'app-main',
  imports: [
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificationsComponent,
    EducationComponent,
  ],
  template: `
    <div class="space-y-16">
      <section
        id="about"
        class="bg-gradient-to-br from-violet-900 via-fuchsia-900 to-purple-800 rounded-lg p-6 shadow-xl"
      >
        <app-home />
      </section>

      <section
        id="experience"
        class="bg-gradient-to-br from-sky-900 via-indigo-900 to-blue-800 rounded-lg p-6 shadow-xl"
      >
        <app-experience />
      </section>

      <section
        id="skills"
        class="bg-gradient-to-br from-teal-900 via-cyan-900 to-emerald-800 rounded-lg p-6 shadow-xl"
      >
        <app-skills />
      </section>

      <section
        id="certifications"
        class="bg-gradient-to-br from-pink-900 via-rose-900 to-orange-800 rounded-lg p-6 shadow-xl"
      >
        <app-certifications />
      </section>

      <section
        id="education"
        class="bg-gradient-to-br from-yellow-900 via-amber-900 to-lime-800 rounded-lg p-6 shadow-xl"
      >
        <app-education />
      </section>
    </div>
  `,
})
export class MainComponent {}
