import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

// ── Web3Forms configuration ────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter girlinorange17@gmail.com → click "Get your Access Key"
// 3. Copy the key from the confirmation email and paste it below
const WEB3FORMS_ACCESS_KEY = '1eb0e585-4b9d-43ad-a952-3f6d1d63fa09';
// ──────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  contactInfo = '';
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient, public i18n: LanguageService) {}

  submit(): void {
    const value = this.contactInfo.trim();
    if (!value || this.status === 'sending') return;

    this.status = 'sending';

    this.http.post('https://api.web3forms.com/submit', {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New booking request — FluffyBreakers',
      message: value
    }).subscribe({
      next: () => { this.status = 'success'; },
      error: () => { this.status = 'error'; }
    });
  }
}
