import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInAnimation, fadeInUpAnimation } from '../../shared/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation, fadeInUpAnimation],
  template: `
    <div class="space-y-8" @fadeIn>
      <!-- Hero Section -->
      <section class="text-center py-12 px-4 sm:px-6 lg:px-8" @fadeInUp>
        <div class="flex flex-col items-center space-y-6">
          <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-blue-500 transform hover:scale-105 transition-transform duration-300 shadow-xl">
            <img src="/profile.jpeg" alt="Viswa Teja" class="w-full h-full object-cover">
          </div>
          <div>
            <h1 class="text-4xl font-bold text-primary-500 sm:text-5xl md:text-6xl">
              <span class="font-bold underline">Viswa</span> Teja Vissamsetty
            </h1>
            <p class="mt-3 text-xl text-gray-300">Angular Developer at Infosys</p>
            <p class="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
              A passionate developer with expertise in Angular, React, and Node.js
              ecosystems. Currently working with cutting-edge technologies and
              always eager to learn and adapt to new challenges.
            </p>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="bg-gray-800/60 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-700/50" @fadeInUp>
        <h2 class="text-2xl font-bold text-primary-500 mb-4">About Me</h2>
        <p class="text-gray-300 leading-relaxed">
          I am an enthusiastic developer who stays up-to-date with emerging
          technologies and features. Currently working in Infosys's Strategic
          Technology Group (STG), I've contributed to major projects for clients
          like CareFirst and Apple, implementing modern UI solutions and leading
          technical initiatives.
        </p>
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-primary-400 mb-3">
            Dream Goal
          </h3>
          <p class="text-gray-300">
            My aspiration is to create or contribute to a product that impacts
            every individual globally, making a meaningful difference in
            people's lives through technology.
          </p>
        </div>
        <div class="mt-6 space-y-2">
          <h3 class="text-xl font-semibold text-primary-400 mb-3">
            Contact Information
          </h3>
          <p class="text-gray-300">
            <span class="font-semibold text-primary-400">Email:</span>
            <a
              href="mailto:viswatejavissamsetty@gmail.com"
              class="text-gray-300 hover:text-cyan-400"
              >{{ 'viswatejavissamsetty@gmail.com' }}</a
            >
          </p>
          <p class="text-gray-300">
            <span class="font-semibold text-primary-400">Mobile/WhatsApp:</span>
            <a
              href="tel:+919441668210"
              class="text-gray-300 hover:text-cyan-400"
              >+91 9441668210</a
            >
          </p>
          <p class="text-gray-300">
            <span class="font-semibold text-primary-400">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/viswa-teja-vissamsetty/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-cyan-400"
              >Viswa teja Vissamsetty
              (linkedin.com/in/viswa-teja-vissamsetty)</a
            >
          </p>
        </div>
      </section>

      <!-- Quick Stats -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6" @fadeInUp>
        <div class="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/30 hover:bg-gray-800/60 transition-all duration-300">
          <h3 class="text-xl font-semibold text-primary-500 mb-2">
            Experience
          </h3>
          <p class="text-gray-300">4.5+ years at Infosys</p>
        </div>
        <div class="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/30 hover:bg-gray-800/60 transition-all duration-300">
          <h3 class="text-xl font-semibold text-primary-500 mb-2">Expertise</h3>
          <p class="text-gray-300">Full Stack Development</p>
        </div>
        <div class="bg-gray-800/40 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700/30 hover:bg-gray-800/60 transition-all duration-300">
          <h3 class="text-xl font-semibold text-primary-500 mb-2">Focus</h3>
          <p class="text-gray-300">Modern Web Technologies</p>
        </div>
      </section>
    </div>
  `,
})
export class HomeComponent {}
