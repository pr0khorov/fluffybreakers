import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

type FileType = 'pdf' | 'image';

interface Certificate {
  file: string;
  fileType: FileType;
  safeUrl?: SafeResourceUrl;
  expanded?: boolean;
}

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: Certificate[];
  selectedCert: Certificate | null = null;
  selectedUrl: SafeResourceUrl | null = null;
  isMobile = false;

  constructor(private sanitizer: DomSanitizer, public i18n: LanguageService) {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());

    const files = [
      'cert1.png', 'cert2.png', 'cert3.jpg', 'cert4.png', 'cert5.jpg',
      'cert6.jpg', 'cert7.png', 'cert8.png', 'cert9.png', 'cert10.png',
      'cert11.png', 'cert12.jpg', 'cert13.png', 'cert14.png', 'cert15.png',
      'cert16.png', 'cert17.png', 'cert18.png', 'cert19.png', 'cert20.png',
      'cert21.png', 'cert22.png', 'cert23.png', 'cert24.png', 'cert25.png',
      'cert26.png', 'cert27.png', 'cert28.png', 'cert29.png', 'cert30.png',
      'cert31.png', 'cert32.png', 'cert33.jpeg', 'cert34.jpeg'
    ];

    this.certificates = files.map((f, i) => {
      const ext = f.split('.').pop()!.toLowerCase();
      return {
        file: `assets/certificates/${f}`,
        fileType: ext === 'pdf' ? 'pdf' : 'image' as FileType
      };
    });
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  open(cert: Certificate): void {
    if (this.isMobile) {
      if (cert.expanded) {
        cert.expanded = false;
        cert.safeUrl = undefined;
      } else {
        this.certificates.forEach(c => { c.expanded = false; c.safeUrl = undefined; });
        cert.expanded = true;
        cert.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cert.file);
      }
    } else {
      this.selectedCert = cert;
      this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cert.file);
    }
  }

  close(): void {
    this.selectedCert = null;
    this.selectedUrl = null;
  }
}
