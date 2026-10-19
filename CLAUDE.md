# Portfolio Giulia Sicari — regole del progetto

Sito portfolio di Giulia Sicari, art director a Milano. Pubblicato con GitHub Pages
dal repository `giuliasicari.github.io` (branch principale, cartella root).

## Tecnologia
- Solo HTML, CSS e JavaScript semplici. **Nessun framework, nessun build step, nessuna dipendenza npm.**
- Ogni pagina è un file HTML statico, apribile direttamente nel browser.
- `.nojekyll` resta nella root: GitHub Pages serve i file così come sono.
- Unico foglio di stile: `css/style.css`. Unico script: `js/main.js` (solo comparsa allo scroll e anno nel footer).
- Consentito **GSAP da CDN con versione fissata**, solo per animazioni discrete e sempre con supporto a
  `prefers-reduced-motion`. Niente React, Tailwind o shadcn in questo sito.
- Niente CSS inline né `<style>` nelle pagine: aggiungi classi in `css/style.css`.

## Struttura
```
index.html            Home: nome, ruolo, frase di presentazione, griglia progetti (#lavori)
about.html            Bio, esperienza/formazione, competenze, strumenti
servizi.html          Servizi offerti (anche con il network di collaboratori), "Come lavoro", invito al contatto
contatti.html         Email e LinkedIn
404.html              Pagina di errore (usa percorsi assoluti "/…")
progetti/<slug>.html  Una pagina per progetto
images/<slug>/        Immagini del progetto: cover.jpg, 01.jpg … 04.jpg
css/style.css  js/main.js  favicon.svg
```
Le pagine in `progetti/` usano percorsi relativi con `../` (es. `../css/style.css`, `../images/<slug>/01.jpg`).

## Stile
- **Minimal ed editoriale**: molto spazio bianco, i lavori sono protagonisti, nessuna decorazione superflua.
- **Tipografia protagonista**:
  - Titoli: **Archivo** 800 (Google Fonts), classe `.display`, tracking negativo, interlinea stretta.
  - Testo: **Inter** 400/500.
  - Etichette piccole in maiuscolo con `.label`; frasi di apertura grandi con `.lead`.
- **Palette quasi monocromatica + un solo accento** (variabili in `:root`):
  - `--bg #fafaf8`, `--ink #111111`, `--muted #6e6e6a`, `--line #e2e2dd`
  - `--accent #ff4a1c` — l'unico colore. Usarlo con parsimonia: punto finale dei titoli,
    numeri dei progetti, stati hover/focus, frecce. Mai come sfondo di grandi aree.
- Non introdurre nuovi colori, font, ombre, bordi arrotondati o gradienti.
- Linee sottili (1px) per separare le sezioni; linea `--ink` sotto i titoli di sezione.
- Animazioni discrete: classe `.reveal` (comparsa allo scroll), hover con cambio colore
  all'accento e leggero zoom sulle immagini. Rispettare `prefers-reduced-motion`.

## Responsive
- Mobile first. Gutter laterali con `--gutter`, dimensioni dei titoli con `clamp()`.
- Breakpoint usati: 480px, 760px, 900px, 1100px.
- Griglia home: 1 colonna su mobile; da 760px 2 colonne, il primo progetto a tutta larghezza (16:9).
  Se l'ultimo progetto resta da solo nella riga, va automaticamente a tutta larghezza.
- Verificare sempre che non ci sia scroll orizzontale a 390px.

## Menu
- Voci, in quest'ordine, uguali su ogni pagina: Lavori, About, Servizi, Contatti.
- La voce della pagina corrente ha `aria-current="page"`.
- Sotto i 400px il menu va su una riga sotto il nome: verificare anche a 320px.

## Testi
- Tutti i testi in **italiano**, tono professionale e diretto, in prima persona nell'About.
- Attributo `lang="it"` su ogni pagina; ogni immagine ha un `alt` descrittivo.

## Aggiungere o modificare un progetto
1. Crea `images/<slug>/` con `cover.jpg` (4:3, consigliato 1920×1440) e le immagini della galleria
   (`01.jpg` e `04.jpg` orizzontali 16:9 a tutta larghezza, `02.jpg` e `03.jpg` verticali 4:5 affiancate).
2. Duplica una pagina in `progetti/` e aggiorna titolo, `<title>`, meta description, Cliente, Ruolo,
   Ambito, testi, percorsi immagini, `width`/`height` delle immagini e il numero "Progetto 0X".
3. Aggiungi la card in `index.html` dentro `.grid` (numero, titolo, tag) e aggiorna il contatore
   accanto a "Lavori selezionati".
4. Aggiorna il link "Progetto successivo" del progetto precedente (l'ultimo punta al primo).
- Galleria: `<figure class="full reveal">` = tutta larghezza, `<figure class="reveal">` = mezza
  larghezza (vanno a coppie).
- Per sostituire un segnaposto basta sovrascrivere il file con lo stesso nome. Se cambiano le
  proporzioni, aggiornare `width`/`height` nell'`<img>`. Esportare JPG ottimizzati (< 500 KB, lato lungo ≤ 2400px).

## Dati da completare
- LinkedIn: https://www.linkedin.com/in/giulia-sicari-195764a3/ (footer di ogni pagina + `contatti.html`).
- Email: giuliasicari93@gmail.com (footer di ogni pagina + `contatti.html`).
- Servizi: i collaboratori non vengono nominati e i servizi non si distinguono tra "miei" e "del team";
  le reference del team si mandano su richiesta. Pacchetti e prezzi: rimandati a un aggiornamento futuro.
- Strumenti in `about.html` e descrizioni dei progetti sono da verificare.

## Skill
- Le skill per i siti stanno sul PC di Giulia in `C:\Claude_Folder\claude-skills` (regole in `CLAUDE.md`,
  elenco e report in `README.md` e `reports/`). Per usarle con Claude sul PC si copiano in
  `%USERPROFILE%\.claude\skills\`:
  `xcopy /E /I C:\Claude_Folder\claude-skills\skills %USERPROFILE%\.claude\skills`
- Le sessioni nel cloud non vedono `C:\`: lì le skill non sono disponibili.
- Per questo sito: GSAP, minimalist-skill, redesign-skill e ui-ux-pro-max come guida; shadcn e 21st-ui
  solo come riferimento di design (nessun componente React).
- **Ogni nuova skill va analizzata prima con Skill Inspector** (NVIDIA SkillSpector + revisione del codice).
  APPROVE → si aggiunge a `C:\Claude_Folder\claude-skills`; CAUTION o REJECT → spiegare a Giulia e chiedere a lei.
