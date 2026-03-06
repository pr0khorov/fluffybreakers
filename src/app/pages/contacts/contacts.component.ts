import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ContactItem {
  icon: string;
  label?: string;
  labelKey?: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor(public i18n: LanguageService) {}

  contacts: ContactItem[] = [
    {
      icon: '📷',
      label: 'Instagram',
      value: '@fluffy.breakers',
      link: 'https://instagram.com/fluffy.breakers'
    },
    {
      icon: '💬',
      label: 'Telegram',
      value: '@girlinorange',
      link: 'https://t.me/girlinorange?text=Hello%21%20I%20found%20your%20contact%20information%20on%20your%20website%2C%20and%20I%20have%20some%20questions%20%3A%29'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+37126963506',
      link: 'https://wa.me/37126963506?text=Hello%21%20I%20found%20your%20contact%20information%20on%20your%20website%2C%20and%20I%20have%20some%20questions%20%3A%29'
    },
    {
      icon: '📞',
      labelKey: 'contacts.phone',
      value: '+37126963506',
      link: 'tel:+37126963506'
    },
    {
      icon: '📧',
      labelKey: 'contacts.email',
      value: 'girlinorange17@gmail.com',
      link: 'mailto:girlinorange17@gmail.com'
    }
  ];
}
