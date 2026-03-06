import { Component } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'Сертификат качества ISO 9001',
      issuer: 'Международная организация по стандартизации',
      date: '2024'
    },
    {
      title: 'Сертификат соответствия ГОСТ',
      issuer: 'Росстандарт',
      date: '2024'
    },
    {
      title: 'Сертификат безопасности',
      issuer: 'Центр сертификации',
      date: '2023'
    },
    {
      title: 'Диплом лауреата',
      issuer: 'Всероссийский конкурс качества',
      date: '2023'
    }
  ];
}
