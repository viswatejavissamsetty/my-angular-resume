import { Component } from '@angular/core';

interface Certification {
  platform: string;
  name: string;
  description?: string;
  link?: string;
}

@Component({
  selector: 'app-certifications',
  template: `
    <!-- Certifications Section -->
    <section>
      <h2 class="text-3xl font-bold text-rose-200 mb-8 text-center">
        Certifications
      </h2>
      <div class="space-y-6">
        @for (cert of certifications; track cert.platform) {
          <div class="transparent-card">
            <h3 class="text-xl font-semibold text-rose-300 mb-2">
              {{ cert.platform }}
            </h3>
            <p class="text-rose-100 mb-2">{{ cert.name }}</p>
            @if (cert.description) {
              <p class="text-rose-200 text-sm">{{ cert.description }}</p>
            }
            @if (cert.link) {
              <a
                [href]="cert.link"
                target="_blank"
                class="inline-block mt-3 text-rose-400 hover:text-rose-300 transition-colors duration-200"
              >
                View Certificate
              </a>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      platform: 'Udemy',
      name: 'NGINX Fundamentals: High Performance Servers from Scratch',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-25a6b36a-81b2-4f00-bc89-ef78720aa474.jpg',
    },
    {
      platform: 'Udemy',
      name: 'Unit Testing for Typescript & NodeJs Developers with Jest',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-65f4f1cf-4fa4-4955-9f99-b7366b1f7e70.jpg',
    },
    {
      platform: 'Udemy',
      name: 'Node JS Cluster with PM2, RabbitMQ, Redis and Nginx',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-7091e9d3-74c4-4fd3-96a8-f30564d9947f.jpg',
    },
    {
      platform: 'Udemy',
      name: 'Tailwind CSS From Scratch | Learn By Building Projects',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8ea6c57e-00f7-4d59-abbc-2aa2ab54ba41.jpg',
    },
    {
      platform: 'Udemy',
      name: "MongoDB - The Complete Developer's Guide 2025",
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-17223416-0355-4941-9065-9c84468e8e3b.jpg',
    },
    {
      platform: 'Udemy',
      name: 'Mastering the System Design Interview',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-91e4c332-7fcc-4120-97e4-ea23cd4aa84b.jpg',
    },
    {
      platform: 'Udemy',
      name: 'Generative AI for Beginners',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-327b5755-9ad4-4400-ba6c-a8079e96f820.jpg',
    },
    {
      platform: 'Simplilearn',
      name: 'AI Masters certification',
      description:
        'Comprehensive study of AI concepts including initial exposure to NLP and deep learning fundamentals.',
    },
    {
      platform: 'NPTEL',
      name: 'Programming, Data Structures And Algorithms Using Python',
    },
    {
      platform: 'NPTEL',
      name: 'Introduction To Internet Of Things',
    },
  ];
}
