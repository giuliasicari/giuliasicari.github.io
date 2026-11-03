# Portfolio Giulia Sicari — regole del progetto

Sito portfolio di Giulia Sicari, art director a Milano. Pubblicato con GitHub Pages
dal repository `giuliasicari.github.io` (branch principale, cartella root).

> **Versione v02** (nero, tipografia grande, nessun colore). Direzione approvata da Giulia il 3/11/2026.
> Le immagini dei progetti sono ancora segnaposto: Giulia le sostituirà in un secondo momento.
> Da valutare: le frasi grandi in home e in About sono provvisorie.
> Questo repository è **pubblico**: niente strategia commerciale, prezzi o dati di fornitori.

## Tecnologia
- Solo HTML, CSS e JavaScript semplici. **Nessun framework, nessun build step, nessuna dipendenza npm.**
- Ogni pagina è un file HTML statico, apribile direttamente nel browser.
- `.nojekyll` resta nella root: GitHub Pages serve i file così come sono.
- Unico foglio di stile: `css/style.css`. Unico script: `js/main.js` (box nero dell'header allo scroll,
  menu mobile, comparsa allo scroll, anno nel footer).
- Consentito **GSAP da CDN con versione fissata**, solo per animazioni discrete e sempre con supporto a
  `prefers-reduced-motion`. Niente React, Tailwind o shadcn in questo sito.
- Niente CSS inline né `<style>` nelle pagine: aggiungi classi in `css/style.css`.

## Struttura
```
index.html            Home: frase grande + un progetto per schermata (pannelli a tutto schermo)
lavori.html           Griglia di tavole verticali 4:5 con didascalia
about.html            Frase grande + blocchi (titolo piccolo a sinistra, testo grande a destra)
servizi.html          Frase grande + "I miei servizi" e "Come lavoro" in colonna stretta
contatti.html         Frase grande + email, LinkedIn, base
404.html              Pagina di errore (usa percorsi assoluti "/…")
progetti/<slug>.html  Una pagina per progetto
images/<slug>/        Immagini del progetto: cover.jpg, 01.jpg … 04.jpg
css/style.css  js/main.js  favicon.svg
```
Le pagine in `progetti/` usano percorsi relativi con `../` (es. `../css/style.css`, `../images/<slug>/01.jpg`).

## Stile
- **Nero, bianco e un grigio. Nessun colore d'accento.** Variabili in `:root`:
  `--bg #000000`, `--ink #ffffff`, `--muted #868686` (voci non attive, didascalie, link), `--line #262626`
  (fondo dei segnaposto immagine).
- **Tipografia:**
  - Testi e titoli: **Inter Tight** 400 (Google Fonts). Anche i titoli grandi sono a peso normale.
  - Nome in home: **Archivo** 800 in larghezza 125 (grottesco largo, effetto logotipo), maiuscolo.
  - Tre misure: `--fs-body` (15px mobile, 18px desktop), `--fs-big` (frasi, About, footer),
    `--fs-statement` (frase-titolo di ogni pagina, classe `.statement`).
- Nessuna linea, ombra, bordo arrotondato o gradiente. Le gerarchie si fanno con dimensione e grigio.
- **Header:** trasparente in cima, box nero appena si scorre. In home c'è il nome a sinistra;
  nelle pagine interne "← Torna a home" (classe `.back`). Menu sempre in alto a destra.
- **Layout Servizi/Contatti** (classe `.info`): griglia a 12 colonne; da 1200px etichetta in colonna 3–4
  e testo in colonna 5–8; tutto allo stesso peso e alla stessa misura del testo.
- **Footer:** frase di contatto grande, link in grigio che diventano bianchi al passaggio.
- **Animazioni:** comparsa allo scroll (`.reveal`, sale di 40px), dissolvenza della pagina all'apertura,
  hamburger con linee da 1px che si trasforma in una X larga e bassa, voci del menu mobile che salgono
  una dopo l'altra. Rispettare sempre `prefers-reduced-motion`.

## Responsive
- Mobile first. Gutter laterali con `--gutter` (16px, 20px da 760px), titoli con `clamp()`.
- Breakpoint usati: 760px (menu desktop al posto dell'hamburger, Lavori a 2 colonne),
  900px (griglie a 12 colonne), 1200px (Lavori a 3 colonne, colonna stretta di Servizi).
- Verificare sempre che non ci sia scroll orizzontale a 375px.

## Menu
- Voci, in quest'ordine, uguali su ogni pagina: Lavori, About, Servizi, Contatti.
- Ogni pagina ha il menu due volte: `.nav` (desktop) e `.mobile-menu` (a tutto schermo, sotto i 760px).
  La voce della pagina corrente ha `aria-current="page"` in entrambi.

## Testi
- Tutti i testi in **italiano**, tono professionale e diretto, in prima persona nell'About.
- Attributo `lang="it"` su ogni pagina; ogni immagine ha un `alt` descrittivo.

## Aggiungere o modificare un progetto
1. Crea `images/<slug>/` con `cover.jpg` (consigliato 1920×1440; in Lavori viene ritagliata in 4:5,
   in home a tutto schermo: tieni il soggetto al centro) e le immagini della galleria
   (`01.jpg` e `04.jpg` orizzontali 16:9 a tutta larghezza, `02.jpg` e `03.jpg` verticali 4:5 affiancate).
2. Duplica una pagina in `progetti/` e aggiorna `<title>`, meta description, titolo, Cliente, Ruolo,
   Ambito, testi, percorsi e `width`/`height` delle immagini.
3. Aggiungi il pannello in `index.html` (numero e nome) e la tavola in `lavori.html` (nome e ambito).
4. Aggiorna il link "Progetto successivo" del progetto precedente (l'ultimo punta al primo).
- Galleria: `<figure class="reveal">` = tutta larghezza, `<figure class="half reveal">` = mezza
  larghezza (vanno a coppie).
- Per sostituire un segnaposto basta sovrascrivere il file con lo stesso nome. Se cambiano le
  proporzioni, aggiornare `width`/`height` nell'`<img>`. Esportare JPG ottimizzati (< 500 KB, lato lungo ≤ 2400px).

## Dati da completare
- LinkedIn: https://www.linkedin.com/in/giulia-sicari-195764a3/ (footer, menu mobile e `contatti.html`).
- Email: giuliasicari93@gmail.com (footer, menu mobile e `contatti.html`).
- Servizi: i collaboratori non vengono nominati e i servizi non si distinguono tra "miei" e "del team";
  le reference del team si mandano su richiesta. Pacchetti e prezzi: rimandati a un aggiornamento futuro.
- Strumenti in `about.html` e descrizioni dei progetti sono da verificare.

## Skill
- Installazione e controllo di sicurezza delle skill: vedi le istruzioni generali di Claude.
- Le sessioni nel cloud non vedono `C:\`: lì le skill non sono disponibili.
- Per questo sito: GSAP (`gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-performance`),
  `design-taste-frontend` (taste-skill, include il percorso di redesign), `minimalist-ui` e `ui-ux-pro-max`
  come guida; shadcn e 21st-ui solo come riferimento di design (nessun componente React).
- Gli script di `design-taste-frontend` scaricano immagini da internet e aprono Chrome: lanciarli solo
  con il permesso di Giulia.
