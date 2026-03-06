import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fluffybreakers';
  menuOpen = false;

  constructor(public i18n: LanguageService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleLang(): void {
    this.i18n.setLang(this.i18n.lang === 'en' ? 'ru' : 'en');
  }
}
