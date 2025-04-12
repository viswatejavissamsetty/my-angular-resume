import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-gray-900">
      <nav class="bg-gray-800 border-b border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-primary-500 text-xl font-bold">Viswa Teja</span>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a routerLink="/about" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">About</a>
                  <a routerLink="/experience" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Experience</a>
                  <a routerLink="/skills" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Skills</a>
                  <a routerLink="/projects" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Projects</a>
                  <a routerLink="/certifications" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Certifications</a>
                </div>
              </div>
            </div>
            <div class="md:hidden">
              <button (click)="toggleMobileMenu()" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div [class.hidden]="!isMobileMenuOpen" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a routerLink="/about" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">About</a>
              <a routerLink="/experience" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Experience</a>
              <a routerLink="/skills" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Skills</a>
              <a routerLink="/certifications" routerLinkActive="active" class="text-gray-300 hover:text-primary-500 block px-3 py-2 rounded-md text-base font-medium [&.active]:text-primary-500 [&.active]:underline [&.active]:font-bold">Certifications</a>
            </div>
          </div>
        </div>
      </nav>
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class LayoutComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}