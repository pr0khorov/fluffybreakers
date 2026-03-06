import { Component } from '@angular/core';
import { LanguageService, Lang } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fluffybreakers';
  menuOpen = false;
  langMenuOpen = false;
  mobileLangMenuOpen = false;

  constructor(public i18n: LanguageService, public theme: ThemeService) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.mobileLangMenuOpen = false;
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.mobileLangMenuOpen = false;
  }

  toggleLangMenu(): void {
    this.langMenuOpen = !this.langMenuOpen;
  }

  toggleMobileLangMenu(): void {
    this.mobileLangMenuOpen = !this.mobileLangMenuOpen;
  }

  selectLang(lang: Lang): void {
    this.i18n.setLang(lang);
    this.langMenuOpen = false;
    this.mobileLangMenuOpen = false;
  }

  closeLangMenu(): void {
    this.langMenuOpen = false;
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
