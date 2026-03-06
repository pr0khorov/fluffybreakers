import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  pdfFile: string;
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
      date: '2024',
      pdfFile: 'assets/certificates/cert-iso-9001.pdf'
    },
    {
      title: 'Сертификат соответствия ГОСТ',
      issuer: 'Росстандарт',
      date: '2024',
      pdfFile: 'assets/certificates/cert-gost.pdf'
    },
    {
      title: 'Сертификат безопасности',
      issuer: 'Центр сертификации',
      date: '2023',
      pdfFile: 'assets/certificates/cert-safety.pdf'
    },
    {
      title: 'Диплом лауреата',
      issuer: 'Всероссийский конкурс качества',
      date: '2023',
      pdfFile: 'assets/certificates/cert-award.pdf'
    }
  ];

  selectedCert: Certificate | null = null;
  selectedPdfUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  openPdf(cert: Certificate): void {
    this.selectedCert = cert;
    this.selectedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cert.pdfFile);
  }

  closePdf(): void {
    this.selectedCert = null;
    this.selectedPdfUrl = null;
  }
}
