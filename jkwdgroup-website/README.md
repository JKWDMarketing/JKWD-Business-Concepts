# jkwdgroup.com · JKWD Business Concepts

Statische Website der **JKWD Business Concepts UG (haftungsbeschränkt)**, Dienstleistungsgesellschaft der JKWD Gruppe.
Reines HTML, CSS und JavaScript. Kein Build-Schritt, kein Framework, keine externen Abhängigkeiten.

## Struktur

```
├── index.html            Startseite
├── impressum.html        Impressum (vor Livegang ausfüllen, aktuell noindex)
├── datenschutz.html      Datenschutzerklärung (vor Livegang ergänzen, aktuell noindex)
├── 404.html              Fehlerseite
├── assets/
│   ├── css/style.css     Gesamtes Styling (CI v2.0, Light/Dark Mode)
│   ├── js/main.js        Navigation (Burger-Menü, Dropdown)
│   ├── img/              Bilder als WebP (KI-generierte Symbolbilder)
│   ├── fonts/            Poppins & Lora lokal (SIL OFL), DSGVO-konform
│   └── logo/             Logo-Varianten als SVG (Schrift in Pfade umgewandelt)
├── favicon.svg / apple-touch-icon.png
├── og-jkwdgroup.jpg      Vorschaubild für Social Media (1200 × 630)
├── CNAME                 Eigene Domain für GitHub Pages
├── robots.txt / sitemap.xml
└── .nojekyll             Verhindert Jekyll-Verarbeitung
```

## Veröffentlichen mit GitHub Pages

1. Neues Repository anlegen, z. B. `jkwdgroup-website` (privat oder öffentlich; GitHub Pages für private Repos erfordert einen kostenpflichtigen Plan).
2. Alle Dateien dieses Ordners in das Repository hochladen (auch `.nojekyll` und `CNAME`).
3. **Settings → Pages → Build and deployment:** Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
4. **Custom domain:** `jkwdgroup.com` eintragen, nach der DNS-Prüfung **Enforce HTTPS** aktivieren.

### DNS bei GoDaddy (jkwdgroup.com)

| Typ   | Name | Wert                       |
|-------|------|----------------------------|
| A     | @    | 185.199.108.153            |
| A     | @    | 185.199.109.153            |
| A     | @    | 185.199.110.153            |
| A     | @    | 185.199.111.153            |
| CNAME | www  | `<github-benutzername>.github.io` |

Vorhandene A- bzw. CNAME-Einträge für `@` und `www` (z. B. GoDaddy-Parking) vorher entfernen. Die DNS-Umstellung kann bis zu 24 Stunden dauern.
Wichtig: E-Mail-Einträge (MX, SPF, DKIM) für info@jkwdgroup.com **nicht** verändern.

## Vor dem Livegang

- [ ] Impressum vollständig ausfüllen (Anschrift, HRB, Registergericht, ggf. USt-ID), danach `noindex` entfernen
- [ ] Datenschutzerklärung ergänzen und prüfen lassen (GitHub Pages, Zoom Scheduler, E-Mail), danach `noindex` entfernen
- [ ] Aussage „100 % digital und papierlos“ von der Steuerberatung bestätigen lassen
- [ ] Netzwerk-Partner erst nach Freigabe namentlich nennen
- [ ] Organigramm prüfen: Firmierungen, Beteiligungen, Vertragsstatus
- [ ] IMPOLA-Website verlinken, sobald vorhanden

## Pflege

- Texte direkt in `index.html` ändern.
- Bilder ersetzen: neue Datei mit gleichem Namen und Seitenverhältnis in `assets/img/` ablegen.
- Kontakt: Termine über `https://scheduler.zoom.us/jkwd-dennis-lasch/jkwd-business-concepts`, E-Mail an `info@jkwdgroup.com`.

## Lizenzen

Poppins und Lora stehen unter der SIL Open Font License 1.1 (siehe `assets/fonts`).
Logo, Texte und Bilder: © 2026 JKWD Gruppe. Alle Rechte vorbehalten.
