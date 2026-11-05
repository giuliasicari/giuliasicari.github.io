# Portfolio Giulia Sicari — regole del progetto

Sito portfolio di Giulia Sicari, art director a Milano. Pubblicato con GitHub Pages
dal repository `giuliasicari.github.io` (branch principale, cartella root).

> **Versione v02** (nero, tipografia grande, nessun colore). Direzione approvata da Giulia il 3/11/2026.
> Le immagini dei progetti sono ancora segnaposto: Giulia le sostituirà in un secondo momento.
> Da valutare: la frase grande in About è provvisoria.
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
index.html            Home: frasi che cambiano + un progetto per schermata (pannelli a tutto schermo)
lavori.html           Griglia di tavole verticali 4:5 con didascalia
about.html            Frase grande + blocchi (titolo piccolo a sinistra, testo grande a destra)
servizi.html          Frase grande + "I miei servizi" e "Come lavoro" in colonna stretta
contatti.html         Frase grande + email, LinkedIn, base
404.html              Pagina di errore (usa percorsi assoluti "/…")
progetti/<slug>.html  Una pagina per progetto (modello v2: vedi sotto)
images/<slug>/        Immagini del progetto: cover.jpg, cover-mobile.jpg e tavole con nomi descrittivi
css/style.css  js/main.js  favicon.svg
```
Le pagine in `progetti/` usano percorsi relativi con `../` (es. `../css/style.css`, `../images/<slug>/cover.jpg`).

## Stile
- **Nero, bianco e un grigio. Nessun colore d'accento.** Variabili in `:root`:
  `--bg #000000`, `--ink #ffffff`, `--muted #868686` (voci non attive, didascalie, link), `--line #262626`
  (fondo dei segnaposto immagine).
- **Tipografia:**
  - Testi e titoli: **Inter Tight** 400 (Google Fonts). Anche i titoli grandi sono a peso normale.
  - Nome in home: **Libre Caslon Text** 400 (Google Fonts), staccato e non maiuscolo: 22px, 20px su telefono (scelta di Giulia, 4/11/2026).
  - Tre misure: `--fs-body` (15px mobile, 18px desktop), `--fs-big` (frasi, About, footer),
    `--fs-statement` (frase-titolo di ogni pagina, classe `.statement`).
- Nessuna linea, ombra, bordo arrotondato o gradiente. Le gerarchie si fanno con dimensione e grigio.
  Eccezione approvata: dentro le tavole dei progetti (pagina progetto v2) l'ombra sotto i fogli e la
  linea sotto le etichette della tavola di sintesi.
- **Header:** trasparente in cima, box nero appena si scorre. In home c'è il nome a sinistra;
  nelle pagine interne "← Torna alla home" (classe `.back`). Menu sempre in alto a destra.
- **Layout Servizi/Contatti** (classe `.info`): griglia a 12 colonne; da 1200px etichetta in colonna 3–4
  e testo in colonna 5–8. Gerarchia: titolo di sezione (`h2`) leggermente più grande e in grigio; voci (`h3`) alla misura
  del testo, in bianco e peso 500; descrizione delle voci in grigio (richiesta di Giulia, 4/11/2026).
- **Footer:** frase di contatto grande, link in grigio che diventano bianchi al passaggio.
- **Frasi della home:** "Disegno … per …", parole fisse in grigio e parole che cambiano in bianco, stesso carattere e peso.
  Testi e tempi in `js/main.js`: dissolvenza incrociata con sfocatura di 2,8 secondi, frase ferma per 4 secondi (scelta di Giulia).
  Con `prefers-reduced-motion` resta ferma la prima frase.
- **Animazioni:** comparsa allo scroll (`.reveal`, sale di 40px), dissolvenza della pagina all'apertura,
  hamburger con linee da 1px che si trasforma in una X larga e bassa, voci del menu mobile che salgono
  una dopo l'altra. Rispettare sempre `prefers-reduced-motion`.

## Responsive
- Mobile first. Gutter laterali con `--gutter` (16px, 20px da 760px), titoli con `clamp()`.
- Breakpoint usati: 760px (menu desktop al posto dell'hamburger, Lavori a 2 colonne),
  900px (griglie a 12 colonne, Lavori a 3 colonne), 1200px (colonna stretta di Servizi).
- Verificare sempre che non ci sia scroll orizzontale a 375px.

## Menu
- Voci, in quest'ordine, uguali su ogni pagina: Lavori, About, Servizi, Contatti.
- Ogni pagina ha il menu due volte: `.nav` (desktop) e `.mobile-menu` (a tutto schermo, sotto i 760px).
  La voce della pagina corrente ha `aria-current="page"` in entrambi.

## Testi
- Tutti i testi in **italiano**, tono professionale e diretto, in prima persona nell'About.
- Attributo `lang="it"` su ogni pagina; ogni immagine ha un `alt` descrittivo.

## Pagina progetto v2 (modello approvato da Giulia il 3/11/2026, primo esempio: `progetti/il-mannarino.html`)
Stile Behance: guidata dalle immagini, pochissimo testo. Ordine:
1. **Copertina** a tutta larghezza (`.hero` con `<picture>`): `cover.jpg` orizzontale 16:9 (2400×1350) e
   `cover-mobile.jpg` verticale 2:3 (1200×1800) per i telefoni in verticale. Se manca sfondo per la versione
   verticale, ricostruirlo; ripiego: logo su fondo pieno nel colore del marchio.
2. **Solo Cliente e Ambito** in piccolo (`.hero-meta`). Niente Ruolo, niente Anno.
3. **Una sola frase** (`.project-intro`), niente titolo grande: il nome è già nella copertina
   (l'`<h1>` resta con `.visually-hidden`). Sotto la frase c'è una pausa prima delle tavole, 36svh su telefono e 32svh da 900px (richiesta di Giulia: non appiccicata, ma senza scorrere troppo).
4. **Tavole** dentro `.flow`: righe `.row` / `.row--2` / `.row--3`; fondo colorato `.stage`; foglio su fondo
   del marchio `.sheet-stage` (es. manifesto impaginato come immagine nello stile del cliente).
5. Facoltativi: testate di sezione `.section` (solo se aggiungono qualcosa alle immagini) e tavola di sintesi
   `.system` (colore, texture; "Dove vive il marchio" `.touch` solo per identità con molti supporti).
   Altri blocchi: `.steps` (passaggi di una trasformazione), `.places` (luoghi con coordinate), `.facts` (tre numeri
   chiave, bianco su nero), `.platform-icon` (icona della piattaforma accanto all'ambito, es. LinkedIn).
   `.areas` (aree di un posizionamento con foto, definizione e parole chiave, dentro `.system`),
   `.palette-mosaic` (palette con le proporzioni della tavola del cliente, es. FG Albertelli).
   Un carattere del marchio si può evocare nelle tavole con un equivalente Google Fonts (es. Jost per il Futura).
   Varia la tavola di sintesi da un progetto all'altro per non essere ripetitiva: se il documento ha già
   una sua tavola della palette (es. FILA), usa quella così com'è invece dei campioni `.swatches`.
6. **Niente crediti** e niente nome dell'agenzia.
7. Fine pagina `.project-nav`: "← Torna ai lavori" a sinistra, "Progetto successivo →" piccolo a destra.
- In alto "← Torna alla home" con `href="../index.html#<slug>"`: la home si riapre sul pannello del progetto
- Colori del progetto: variabili `--p-1`, `--p-2`, `--p-paper`, `--p-ink` su `.project--<slug>`,
  in una sezione dedicata in fondo ai moduli in `style.css` (insieme ai campioni `.swatch__chip--<nome>`).
- **Nessun testo tagliato** (richiesta di Giulia). In una riga con immagini di proporzioni diverse usa
  `.row--ratio` con colonne proporzionali al rapporto larghezza/altezza (classe `.row--<slug>-<nome>` nella
  sezione del progetto), oppure prepara immagini con le stesse proporzioni ritagliando solo ciò che non ha testo.
  Non riempire con bande vuote: se serve spazio, estendi lo sfondo o cambia composizione. Le copertine verticali
  (2:3) vengono mostrate intere sui telefoni (pannelli della home in 2:3); in Lavori la tavola è 4:5: se la copertina
  ha testi in basso usa `.work__media--bottom`.
- **Bordi sempre rifilati** (richiesta di Giulia): nessuna striscia bianca o di colore ai bordi dovuta a un ritaglio
  impreciso (residui di slide, cornici, righe di 1-2 px). Prima di pubblicare controlla i quattro bordi di ogni
  immagine, in automatico e a vista, e rifila; nelle coppie affiancate rifila la stessa quantità su entrambe.
  Criterio: una fascia uniforme al bordo che stacca di colpo dall'immagine (residuo di slide, bianco attorno a
  un oggetto, striscia di colore) va tagliata; il fondo pieno che continua dentro la composizione no.
- **Soggetto mai tagliato** (richiesta di Giulia): un ritaglio non deve mozzare un soggetto di poco (es. un anello
  tagliato sul fondo). O il soggetto è intero e centrato, ricostruendo lo sfondo se manca, o il taglio è un vero
  dettaglio fotografico, deciso e ravvicinato.
- Immagini con nomi descrittivi in `images/<slug>/` (es. `cover.jpg`, `cover-mobile.jpg`, `manifesto.jpg`,
  `poster-1.jpg`). Senza bordi bianchi: rifilare o ingrandire leggermente per riempire il formato.
- In home il pannello ha `id="<slug>"` e la `<picture>` con la copertina verticale; in Lavori la tavola 4:5
  usa `cover-mobile.jpg`, oppure `card.jpg` (4:5) se il ritaglio taglierebbe il soggetto: il prodotto o le persone
  devono vedersi interi anche nella tavola.
- Sorgenti e prototipi restano fuori dal repo, in `C:\Claude_Folder\portfolio-prototipi\` (repo pubblico).
- Progetti (3/11/2026). In home, in quest'ordine: FG Albertelli, Il Mannarino, Etjca, Hummus Around,
  IDNTT Everywhere, FILA Group, Postbiotica (confermato da Giulia). Solo in Lavori: Momento, Al Passo, Zero, Filante, Fittiamo, 2stampe, e in coda i progetti di laurea
  (Politecnico): Chilling at Home, TAAC, Handprint. Da dichiarare come tali: "tesi di laurea per IMETEC", "concept per IKEA".
- Video nelle pagine progetto (primo esempio: Fittiamo): MP4 senza audio, 5-9 secondi, 540 px di larghezza per i verticali, circa 1 MB,
  con locandina `.jpg` omonima e attributo `data-autoplay`: `js/main.js` li avvia solo quando sono in vista e li lascia fermi con `prefers-reduced-motion`.
  Blocchi Fittiamo: `.reels` (anteprime che rimandano a Instagram), `.fit-carousel`, `.fit-texture`, `.fit-cta` (inviti finali a Instagram e sito).
- Per aggiungere un progetto: crea `progetti/<slug>.html` sul modello v2 (vedi le pagine esistenti), le immagini
  in `images/<slug>/`, aggiungi pannello in `index.html` (se in home) e tavola in `lavori.html`, e aggiorna il
  "Progetto successivo" del progetto precedente (l'ultimo punta al primo).

## Dati da completare
- LinkedIn: https://www.linkedin.com/in/giulia-sicari-195764a3/ (footer, menu mobile e `contatti.html`).
- Email: giuliasicari93@gmail.com (footer, menu mobile e `contatti.html`).
- Servizi: i collaboratori non vengono nominati e i servizi non si distinguono tra "miei" e "del team";
  le reference del team si mandano su richiesta. Pacchetti e prezzi: rimandati a un aggiornamento futuro.
- Prodotti personalizzati in `servizi.html`: aggiungere il link al catalogo digitale di 2stampe appena è online.
- Contatti: scrivere solo che Giulia lavora da remoto, senza indicare dove si trova.
- Descrizioni dei progetti da verificare.

## Skill
- Installazione e controllo di sicurezza delle skill: vedi le istruzioni generali di Claude.
- Le sessioni nel cloud non vedono `C:\`: lì le skill non sono disponibili.
- Per questo sito: GSAP (`gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-performance`),
  `design-taste-frontend` (taste-skill, include il percorso di redesign), `minimalist-ui` e `ui-ux-pro-max`
  come guida; shadcn e 21st-ui solo come riferimento di design (nessun componente React).
- Gli script di `design-taste-frontend` scaricano immagini da internet e aprono Chrome: lanciarli solo
  con il permesso di Giulia.
