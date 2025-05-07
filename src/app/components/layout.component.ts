import { Component } from '@angular/core';
import { MainComponent } from './main.component';

@Component({
  selector: 'app-layout',
  imports: [MainComponent],
  template: `
    <div
      class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <nav
        class="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-700 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a
                  href="#about"
                  class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-xl font-bold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                >
                  Viswa Teja
                </a>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  @for (item of MenuItems; track item.label) {
                    <a
                      href="{{ item.href }}"
                      class="text-gray-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                    >
                      {{ item.label }}
                    </a>
                  }
                </div>
              </div>
            </div>
            <div class="md:hidden">
              <button
                (click)="toggleMobileMenu()"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  @if (isMobileMenuOpen) {
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  } @else {
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  }
                </svg>
              </button>
            </div>
          </div>
          @if (isMobileMenuOpen) {
            <div class="md:hidden overflow-hidden">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                @for (item of MenuItems; track item.label) {
                  <a
                    href="{{ item.href }}"
                    (click)="toggleMobileMenu()"
                    class="text-gray-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                  >
                    {{ item.label }}
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </nav>
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <app-main />
      </main>
    </div>
  `,
})
export class LayoutComponent {
  protected isMobileMenuOpen = false;

  protected toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  protected readonly MenuItems: MenuItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
  ];
}

interface MenuItem {
  label: string;
  href: string;
}
