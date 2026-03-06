import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  answerHtml: string;
  open: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faqItems: FaqItem[];

  constructor() {
    const raw: { question: string; answer: string }[] = [
      {
        question: 'Do you take new clients?',
        answer: 'Yes. I regularly open spots for new clients, both online and offline.\nIf the schedule is full, you can join the waitlist and I\'ll contact you as soon as a place becomes available.'
      },
      {
        question: 'What can you help us with?',
        answer: 'Dog behavior and everyday life together.\nReactivity, pulling, fears, aggression, puppy basics, calm walks — and also pet loss grief support.\nWe work step-by-step, at your pace, with realistic solutions, without shame and pressure.'
      },
      {
        question: 'Your price list?',
        answer: 'Both online & offline consultations: 30\u20AC'
      },
      {
        question: 'Where do you work?',
        answer: '\uD83D\uDCCD Riga, Latvia — in person\n\uD83C\uDF10 Worldwide — online\nOnline work is just as effective and often more convenient for owners.'
      },
      {
        question: 'How can I contact you?',
        answer: 'Via DM in Instagram (<a href="https://instagram.com/fluffy.breakers" target="_blank" rel="noopener noreferrer">@fluffy.breakers</a>)\nAlso see "Contacts" page for more options.'
      },
      {
        question: 'Do you have anything besides consultations?',
        answer: 'Yes \uD83E\uDD0D\nIf you\'re not ready for a full consultation yet, you can start small. Below you can find my checklist and guide. And, of course, blog posts & reels with practical tips.'
      }
    ];

    this.faqItems = raw.map(item => ({
      ...item,
      answerHtml: item.answer.replace(/\n/g, '<br>'),
      open: false
    }));
  }

  toggle(item: FaqItem): void {
    item.open = !item.open;
  }
}
