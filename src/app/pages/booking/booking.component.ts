import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  formUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, public i18n: LanguageService) {
    this.formUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/forms/d/e/1FAIpQLSfdcH4Ir3a1bD77BvKrmmfHMCTii8rM_J_3ABPad_6wY8V0-Q/viewform?embedded=true'
    );
  }
}
