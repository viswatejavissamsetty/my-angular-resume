import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about', component: HomeComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'certifications', component: CertificationsComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];
