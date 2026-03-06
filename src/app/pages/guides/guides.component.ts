import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

interface Guide {
  titleKey: string;
  file: string;
  safeUrl?: SafeResourceUrl;
  expanded?: boolean;
}

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent {
  guides: Guide[] = [
    {
      titleKey: 'guides.item1',
      file: 'assets/guides/Dog Stress Signs checklist.pdf'
    },
    {
      titleKey: 'guides.item2',
      file: 'assets/guides/Why dogs pull on the leash.pdf'
    }
  ];

  selectedGuide: Guide | null = null;
  selectedUrl: SafeResourceUrl | null = null;
  isMobile = false;

  constructor(private sanitizer: DomSanitizer, public i18n: LanguageService) {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  open(guide: Guide): void {
    if (this.isMobile) {
      if (guide.expanded) {
        guide.expanded = false;
        guide.safeUrl = undefined;
      } else {
        this.guides.forEach(g => { g.expanded = false; g.safeUrl = undefined; });
        guide.expanded = true;
        guide.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(guide.file);
      }
    } else {
      this.selectedGuide = guide;
      this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(guide.file);
    }
  }

  close(): void {
    this.selectedGuide = null;
    this.selectedUrl = null;
  }
}
