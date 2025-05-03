import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInUpAnimation = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '600ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' }),
    ),
  ]),
]);

export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-out', style({ opacity: 1 })),
  ]),
]);

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('300ms ease-out', style({ transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),
]);

export const skillBarAnimation = trigger('skillBar', [
  transition(':enter', [style({ width: 0 }), animate('1000ms ease-out')]),
]);
