import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface FaqItem {
  qKey: string;
  aKey: string;
  open: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faqItems: FaqItem[] = [
    { qKey: 'faq.q1', aKey: 'faq.a1', open: false },
    { qKey: 'faq.q2', aKey: 'faq.a2', open: false },
    { qKey: 'faq.q3', aKey: 'faq.a3', open: false },
    { qKey: 'faq.q4', aKey: 'faq.a4', open: false },
    { qKey: 'faq.q5', aKey: 'faq.a5', open: false },
    { qKey: 'faq.q6', aKey: 'faq.a6', open: false },
  ];

  constructor(public i18n: LanguageService) {}

  answerHtml(key: string): string {
    return this.i18n.t(key).replace(/\n/g, '<br>');
  }

  toggle(item: FaqItem): void {
    item.open = !item.open;
  }
}
