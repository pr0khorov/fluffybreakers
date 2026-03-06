import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Lang = 'en' | 'ru' | 'lv' | 'sv';

const SUPPORTED_LANGS: Lang[] = ['en', 'ru', 'lv', 'sv'];

const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  ru: 'RU',
  lv: 'LV',
  sv: 'SV',
};

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.certificates': 'Certificates',
    'nav.guides': 'Guides',
    'nav.contacts': 'Contacts',

    // Footer
    'footer.rights': '\u00A9 2026 FluffyBreakers. All rights reserved.',

    // Home — hero
    'home.name': 'Aleksandra',
    'home.brand': 'Fluffy Breakers',
    'home.hero': 'Dog behavior specialist & Pet loss grief counselor<br>Riga, Latvia & Online<br>Helping through hard moments.<br>\uD83E\uDDE1bond\uD83E\uDDE1trust\uD83E\uDDE1comfort\uD83E\uDDE1safety\uD83E\uDDE1',

    // Home — FAQ
    'faq.q1': 'Do you take new clients?',
    'faq.a1': 'Yes. I regularly open spots for new clients, both online and offline.\nIf the schedule is full, you can join the waitlist and I\'ll contact you as soon as a place becomes available.',
    'faq.q2': 'What can you help us with?',
    'faq.a2': 'Dog behavior and everyday life together.\nReactivity, pulling, fears, aggression, puppy basics, calm walks \u2014 and also pet loss grief support.\nWe work step-by-step, at your pace, with realistic solutions, without shame and pressure.',
    'faq.q3': 'Your price list?',
    'faq.a3': 'Both online & offline consultations: 30\u20AC',
    'faq.q4': 'Where do you work?',
    'faq.a4': '\uD83D\uDCCD Riga, Latvia \u2014 in person\n\uD83C\uDF10 Worldwide \u2014 online\nOnline work is just as effective and often more convenient for owners.',
    'faq.q5': 'How can I contact you?',
    'faq.a5': 'Via DM in Instagram (<a href="https://instagram.com/fluffy.breakers" target="_blank" rel="noopener noreferrer">@fluffy.breakers</a>)\nAlso see \u201CContacts\u201D page for more options.',
    'faq.q6': 'Do you have anything besides consultations?',
    'faq.a6': 'Yes \uD83E\uDD0D\nIf you\'re not ready for a full consultation yet, you can start small. Below you can find my checklist and guide. And, of course, blog posts & reels with practical tips.',

    // Certificates
    'certificates.title': 'Certificates',
    'certificates.subtitle': 'Our achievements and qualification confirmations',
    'certificates.close': 'Close',
    'certificates.hide': 'Hide',
    'certificates.view': 'View',

    // Guides
    'guides.title': 'Guides',
    'guides.subtitle': 'Useful materials for dog owners',
    'guides.close': 'Close',
    'guides.hide': 'Hide',
    'guides.viewPdf': 'View PDF',
    'guides.item1': 'Dog Stress Signs Checklist',
    'guides.item2': 'Why Dogs Pull on the Leash',

    // Contacts
    'contacts.title': 'Contacts',
    'contacts.subtitle': 'Get in touch with us in any convenient way',
    'contacts.phone': 'Phone',
    'contacts.email': 'Email',
  },

  ru: {
    // Nav
    'nav.home': '\u0413\u043B\u0430\u0432\u043D\u0430\u044F',
    'nav.certificates': '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B',
    'nav.guides': '\u0413\u0430\u0439\u0434\u044B',
    'nav.contacts': '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B',

    // Footer
    'footer.rights': '\u00A9 2026 FluffyBreakers. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.',

    // Home — hero
    'home.name': '\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430',
    'home.brand': 'Fluffy Breakers',
    'home.hero': '\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u043F\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044E \u0441\u043E\u0431\u0430\u043A \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0442\u0435\u0440\u0435 \u043F\u0438\u0442\u043E\u043C\u0446\u0430<br>\u0420\u0438\u0433\u0430, \u041B\u0430\u0442\u0432\u0438\u044F \u0438 \u043E\u043D\u043B\u0430\u0439\u043D<br>\u041F\u043E\u043C\u043E\u0433\u0430\u044E \u0432 \u0442\u0440\u0443\u0434\u043D\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B.<br>\uD83E\uDDE1\u0441\u0432\u044F\u0437\u044C\uD83E\uDDE1\u0434\u043E\u0432\u0435\u0440\u0438\u0435\uD83E\uDDE1\u043A\u043E\u043C\u0444\u043E\u0440\u0442\uD83E\uDDE1\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C\uD83E\uDDE1',

    // Home — FAQ
    'faq.q1': '\u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?',
    'faq.a1': '\u0414\u0430. \u042F \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043A\u0430\u043A \u043E\u043D\u043B\u0430\u0439\u043D, \u0442\u0430\u043A \u0438 \u043E\u0444\u043B\u0430\u0439\u043D.\n\u0415\u0441\u043B\u0438 \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u043D\u044F\u0442\u043E, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0442\u044C \u0432 \u043B\u0438\u0441\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F, \u0438 \u044F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441 \u0432\u0430\u043C\u0438, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043C\u0435\u0441\u0442\u043E.',
    'faq.q2': '\u0421 \u0447\u0435\u043C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043C\u043E\u0447\u044C?',
    'faq.a2': '\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u043E\u0431\u0430\u043A \u0438 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C \u0432\u043C\u0435\u0441\u0442\u0435.\n\u0420\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C, \u043D\u0430\u0442\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0432\u043E\u0434\u043A\u0430, \u0441\u0442\u0440\u0430\u0445\u0438, \u0430\u0433\u0440\u0435\u0441\u0441\u0438\u044F, \u043E\u0441\u043D\u043E\u0432\u044B \u0434\u043B\u044F \u0449\u0435\u043D\u043A\u043E\u0432, \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0443\u043B\u043A\u0438 \u2014 \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0442\u0435\u0440\u0435 \u043F\u0438\u0442\u043E\u043C\u0446\u0430.\n\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u043E, \u0432 \u0432\u0430\u0448\u0435\u043C \u0442\u0435\u043C\u043F\u0435, \u0441 \u0440\u0435\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u043C\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C\u0438, \u0431\u0435\u0437 \u0441\u0442\u044B\u0434\u0430 \u0438 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F.',
    'faq.q3': '\u041F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442?',
    'faq.a3': '\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u043E\u0444\u043B\u0430\u0439\u043D: 30\u20AC',
    'faq.q4': '\u0413\u0434\u0435 \u0432\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\u0435?',
    'faq.a4': '\uD83D\uDCCD \u0420\u0438\u0433\u0430, \u041B\u0430\u0442\u0432\u0438\u044F \u2014 \u043E\u0447\u043D\u043E\n\uD83C\uDF10 \u041F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443 \u2014 \u043E\u043D\u043B\u0430\u0439\u043D\n\u041E\u043D\u043B\u0430\u0439\u043D-\u0440\u0430\u0431\u043E\u0442\u0430 \u0442\u0430\u043A \u0436\u0435 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0430 \u0438 \u0447\u0430\u0441\u0442\u043E \u0443\u0434\u043E\u0431\u043D\u0435\u0435 \u0434\u043B\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432.',
    'faq.q5': '\u041A\u0430\u043A \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F?',
    'faq.a5': '\u0427\u0435\u0440\u0435\u0437 \u043B\u0438\u0447\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 Instagram (<a href="https://instagram.com/fluffy.breakers" target="_blank" rel="noopener noreferrer">@fluffy.breakers</a>)\n\u0422\u0430\u043A\u0436\u0435 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u00AB\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B\u00BB.',
    'faq.q6': '\u0415\u0441\u0442\u044C \u043B\u0438 \u0447\u0442\u043E-\u0442\u043E \u043A\u0440\u043E\u043C\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0439?',
    'faq.a6': '\u0414\u0430 \uD83E\uDD0D\n\u0415\u0441\u043B\u0438 \u0432\u044B \u0435\u0449\u0451 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u043A \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438, \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0447\u0430\u0442\u044C \u0441 \u043C\u0430\u043B\u043E\u0433\u043E. \u041D\u0438\u0436\u0435 \u0432\u044B \u043D\u0430\u0439\u0434\u0451\u0442\u0435 \u043C\u043E\u0439 \u0447\u0435\u043A-\u043B\u0438\u0441\u0442 \u0438 \u0433\u0430\u0439\u0434. \u0410 \u0442\u0430\u043A\u0436\u0435, \u043A\u043E\u043D\u0435\u0447\u043D\u043E, \u043F\u043E\u0441\u0442\u044B \u0438 \u0440\u0438\u043B\u0441\u044B \u0441 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u043E\u0432\u0435\u0442\u0430\u043C\u0438.',

    // Certificates
    'certificates.title': '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B',
    'certificates.subtitle': '\u041D\u0430\u0448\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438',
    'certificates.close': '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
    'certificates.hide': '\u0421\u043A\u0440\u044B\u0442\u044C',
    'certificates.view': '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C',

    // Guides
    'guides.title': '\u0413\u0430\u0439\u0434\u044B',
    'guides.subtitle': '\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0434\u043B\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432 \u0441\u043E\u0431\u0430\u043A',
    'guides.close': '\u0417\u0430\u043A\u0440\u044B\u0442\u044C',
    'guides.hide': '\u0421\u043A\u0440\u044B\u0442\u044C',
    'guides.viewPdf': '\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C PDF',
    'guides.item1': '\u0427\u0435\u043A-\u043B\u0438\u0441\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u043E\u0432 \u0441\u0442\u0440\u0435\u0441\u0441\u0430 \u0443 \u0441\u043E\u0431\u0430\u043A',
    'guides.item2': '\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u043E\u0431\u0430\u043A\u0438 \u0442\u044F\u043D\u0443\u0442 \u043F\u043E\u0432\u043E\u0434\u043E\u043A',

    // Contacts
    'contacts.title': '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B',
    'contacts.subtitle': '\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C',
    'contacts.phone': '\u0422\u0435\u043B\u0435\u0444\u043E\u043D',
    'contacts.email': '\u041F\u043E\u0447\u0442\u0430',
  },

  lv: {
    // Nav
    'nav.home': 'S\u0101kums',
    'nav.certificates': 'Sertifik\u0101ti',
    'nav.guides': 'Ce\u013Cve\u017Ei',
    'nav.contacts': 'Kontakti',

    // Footer
    'footer.rights': '\u00A9 2026 FluffyBreakers. Visas ties\u012Bbas aizsarg\u0101tas.',

    // Home — hero
    'home.name': 'Aleksandra',
    'home.brand': 'Fluffy Breakers',
    'home.hero': 'Su\u0146u uzved\u012Bbas speci\u0101liste un m\u012B\u013Cdz\u012Bvnieku zaud\u0113juma atbalsts<br>R\u012Bga, Latvija un tie\u0161saist\u0113<br>Pal\u012Bdzu gr\u016Btos br\u012B\u017Eos.<br>\uD83E\uDDE1saikne\uD83E\uDDE1uztic\u0113\u0161an\u0101s\uD83E\uDDE1komforts\uD83E\uDDE1dro\u0161\u012Bba\uD83E\uDDE1',

    // Home — FAQ
    'faq.q1': 'Vai j\u016Bs pie\u0146emat jaunus klientus?',
    'faq.a1': 'J\u0101. Es regul\u0101ri atv\u0113ru vietas jauniem klientiem \u2014 gan tie\u0161saist\u0113, gan kl\u0101tien\u0113.\nJa grafiks ir aizpild\u012Bts, varat pievienoties gaid\u012B\u0161anas sarakstam, un es sazin\u0101\u0161os ar jums, tikl\u012Bdz atbr\u012Bvosies vieta.',
    'faq.q2': 'Ar ko j\u016Bs varat mums pal\u012Bdz\u0113t?',
    'faq.a2': 'Su\u0146u uzved\u012Bba un ikdienas dz\u012Bve kop\u0101.\nReaktivit\u0101te, pavadas vilk\u0161ana, bailes, agresija, kuc\u0113nu pamati, mier\u012Bgas pastaigas \u2014 un ar\u012B atbalsts m\u012B\u013Cdz\u012Bvnieka zaud\u0113juma gad\u012Bjum\u0101.\nStr\u0101d\u0101jam soli pa solim, j\u016Bsu temp\u0101, ar re\u0101listiskiem risin\u0101jumiem, bez kauna un spiediena.',
    'faq.q3': 'J\u016Bsu cenr\u0101dis?',
    'faq.a3': 'Konsult\u0101cijas tie\u0161saist\u0113 un kl\u0101tien\u0113: 30\u20AC',
    'faq.q4': 'Kur j\u016Bs str\u0101d\u0101jat?',
    'faq.a4': '\uD83D\uDCCD R\u012Bga, Latvija \u2014 kl\u0101tien\u0113\n\uD83C\uDF10 Vis\u0101 pasaul\u0113 \u2014 tie\u0161saist\u0113\nDarbs tie\u0161saist\u0113 ir tikpat efekt\u012Bvs un bieži \u0113rt\u0101ks \u012Bpa\u0161niekiem.',
    'faq.q5': 'K\u0101 ar jums sazin\u0101ties?',
    'faq.a5': 'Rakstiet Instagram (<a href="https://instagram.com/fluffy.breakers" target="_blank" rel="noopener noreferrer">@fluffy.breakers</a>)\nSkatiet ar\u012B lapu \u201CKontakti\u201D.',
    'faq.q6': 'Vai jums ir v\u0113l kas papildus konsult\u0101cij\u0101m?',
    'faq.a6': 'J\u0101 \uD83E\uDD0D\nJa v\u0113l neesat gatavi pilnai konsult\u0101cijai, varat s\u0101kt ar mazumu. Zem\u0101k atrad\u012Bsiet manu kontrolsarakstu un ce\u013Cvedi. Un, protams, emu\u0101ra ierakstus un reels ar praktiskiem padomiem.',

    // Certificates
    'certificates.title': 'Sertifik\u0101ti',
    'certificates.subtitle': 'M\u016Bsu sasniegumi un kvalifik\u0101cijas apstiprin\u0101jumi',
    'certificates.close': 'Aizv\u0113rt',
    'certificates.hide': 'Pasl\u0113pt',
    'certificates.view': 'Skat\u012Bt',

    // Guides
    'guides.title': 'Ce\u013Cve\u017Ei',
    'guides.subtitle': 'Noder\u012Bgi materi\u0101li su\u0146u \u012Bpa\u0161niekiem',
    'guides.close': 'Aizv\u0113rt',
    'guides.hide': 'Pasl\u0113pt',
    'guides.viewPdf': 'Skat\u012Bt PDF',
    'guides.item1': 'Su\u0146u stresa paz\u012Bmju kontrolsaraksts',
    'guides.item2': 'K\u0101p\u0113c su\u0146i velk pavadu',

    // Contacts
    'contacts.title': 'Kontakti',
    'contacts.subtitle': 'Sazinieties ar mums jums \u0113rt\u0101 veid\u0101',
    'contacts.phone': 'T\u0101lrunis',
    'contacts.email': 'E-pasts',
  },

  sv: {
    // Nav
    'nav.home': 'Hem',
    'nav.certificates': 'Certifikat',
    'nav.guides': 'Guider',
    'nav.contacts': 'Kontakt',

    // Footer
    'footer.rights': '\u00A9 2026 FluffyBreakers. Alla r\u00E4ttigheter f\u00F6rbeh\u00E5llna.',

    // Home — hero
    'home.name': 'Aleksandra',
    'home.brand': 'Fluffy Breakers',
    'home.hero': 'Specialist p\u00E5 hundbeteende & sorgest\u00F6d vid f\u00F6rlust av husdjur<br>Riga, Lettland & online<br>Hj\u00E4lper genom sv\u00E5ra stunder.<br>\uD83E\uDDE1band\uD83E\uDDE1tillit\uD83E\uDDE1komfort\uD83E\uDDE1trygghet\uD83E\uDDE1',

    // Home — FAQ
    'faq.q1': 'Tar du emot nya klienter?',
    'faq.a1': 'Ja. Jag \u00F6ppnar regelbundet platser f\u00F6r nya klienter, b\u00E5de online och p\u00E5 plats.\nOm schemat \u00E4r fullt kan du st\u00E4lla dig i k\u00F6n s\u00E5 kontaktar jag dig s\u00E5 snart en plats blir ledig.',
    'faq.q2': 'Vad kan du hj\u00E4lpa oss med?',
    'faq.a2': 'Hundbeteende och vardagsliv tillsammans.\nReaktivitet, dragning i koppel, r\u00E4dslor, aggression, valpgrunder, lugna promenader \u2014 och \u00E4ven sorgest\u00F6d vid f\u00F6rlust av husdjur.\nVi arbetar steg f\u00F6r steg, i din takt, med realistiska l\u00F6sningar, utan skam och press.',
    'faq.q3': 'Din prislista?',
    'faq.a3': 'Konsultationer online och p\u00E5 plats: 30\u20AC',
    'faq.q4': 'Var arbetar du?',
    'faq.a4': '\uD83D\uDCCD Riga, Lettland \u2014 p\u00E5 plats\n\uD83C\uDF10 V\u00E4rldsomfattande \u2014 online\nOnlinearbete \u00E4r lika effektivt och ofta bekv\u00E4mare f\u00F6r \u00E4garna.',
    'faq.q5': 'Hur kan jag kontakta dig?',
    'faq.a5': 'Via DM p\u00E5 Instagram (<a href="https://instagram.com/fluffy.breakers" target="_blank" rel="noopener noreferrer">@fluffy.breakers</a>)\nSe \u00E4ven sidan \u201CKontakt\u201D f\u00F6r fler alternativ.',
    'faq.q6': 'Har du n\u00E5got ut\u00F6ver konsultationer?',
    'faq.a6': 'Ja \uD83E\uDD0D\nOm du inte \u00E4r redo f\u00F6r en fullst\u00E4ndig konsultation \u00E4nnu kan du b\u00F6rja sm\u00E5tt. Nedan hittar du min checklista och guide. Och naturligtvis blogginl\u00E4gg och reels med praktiska tips.',

    // Certificates
    'certificates.title': 'Certifikat',
    'certificates.subtitle': 'V\u00E5ra prestationer och kvalifikationsintyg',
    'certificates.close': 'St\u00E4ng',
    'certificates.hide': 'D\u00F6lj',
    'certificates.view': 'Visa',

    // Guides
    'guides.title': 'Guider',
    'guides.subtitle': 'Anv\u00E4ndbara material f\u00F6r hund\u00E4gare',
    'guides.close': 'St\u00E4ng',
    'guides.hide': 'D\u00F6lj',
    'guides.viewPdf': 'Visa PDF',
    'guides.item1': 'Checklista f\u00F6r stresstecken hos hundar',
    'guides.item2': 'Varf\u00F6r hundar drar i kopplet',

    // Contacts
    'contacts.title': 'Kontakt',
    'contacts.subtitle': 'Kontakta oss p\u00E5 det s\u00E4tt som passar dig',
    'contacts.phone': 'Telefon',
    'contacts.email': 'E-post',
  },
};

function detectBrowserLang(): Lang {
  const browserLangs = navigator.languages ?? [navigator.language];
  for (const tag of browserLangs) {
    const code = tag.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGS.includes(code as Lang)) {
      return code as Lang;
    }
  }
  return 'en';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang: Lang;
  lang$ = new BehaviorSubject<Lang>('en');

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      this.currentLang = saved;
    } else {
      this.currentLang = detectBrowserLang();
      localStorage.setItem('lang', this.currentLang);
    }
    this.lang$.next(this.currentLang);
  }

  get lang(): Lang {
    return this.currentLang;
  }

  get langLabel(): string {
    return LANG_LABELS[this.currentLang];
  }

  get supportedLangs(): Lang[] {
    return SUPPORTED_LANGS;
  }

  setLang(lang: Lang): void {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.lang$.next(lang);
  }

  nextLang(): void {
    const idx = SUPPORTED_LANGS.indexOf(this.currentLang);
    const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
    this.setLang(next);
  }

  t(key: string): string {
    return TRANSLATIONS[this.currentLang][key] || key;
  }
}
