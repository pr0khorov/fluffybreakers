import { Component } from '@angular/core';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  link: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
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
      label: 'Телефон',
      value: '+37126963506',
      link: 'tel:+37126963506'
    },
    {
      icon: '📧',
      label: 'Почта',
      value: 'girlinorange17@gmail.com',
      link: 'mailto:girlinorange17@gmail.com'
    }
  ];
}
