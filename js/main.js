// Giulia Sicari — Portfolio
// JavaScript minimo: header allo scroll, menu mobile, comparsa degli elementi allo scroll e anno nel footer.

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // Anno corrente nel footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Box nero sotto l'header appena si scorre
  const onScroll = () => root.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile: apre/chiude, si chiude con Esc
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-mobile');
  if (toggle && menu) {
    const setOpen = (open) => {
      root.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
    };
    toggle.addEventListener('click', () => setOpen(!root.classList.contains('menu-open')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && root.classList.contains('menu-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  }

  // Frasi della home: per cambiare i testi modifica questo elenco
  // (la prima coppia deve restare uguale al testo scritto in index.html)
  const phrases = document.querySelector('[data-phrases]');
  if (phrases && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const PAIRS = [
      ['identità', 'chi ha qualcosa da dire.'],
      ['campagne', 'marchi che vogliono farsi ricordare.'],
      ['contenuti social', 'brand che parlano ogni giorno.'],
      ['siti', 'idee che meritano una casa.'],
      ['video', 'storie che si muovono.'],
    ];
    const PAUSE = 4000;     // quanto resta ferma ogni frase
    const STAGGER = 280;    // ritardo tra la prima e la seconda parte
    const FADE = 2800;      // durata della dissolvenza
    const EASE = 'cubic-bezier(.37,0,.63,1)';
    const CLEAR = { filter: 'blur(0)', opacity: 1 };
    const BLURRED = { filter: 'blur(.3em)', opacity: 0 };

    const what = phrases.querySelector('[data-slot="what"]');
    const who = phrases.querySelector('[data-slot="who"]');
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let current = 0;
    let busy = false;

    // Ogni parola è un blocco a sé: va a capo normalmente e si può sfocare
    const fill = (slot, text) => {
      slot.replaceChildren();
      text.split(' ').forEach((word, i, all) => {
        const span = document.createElement('span');
        span.className = 'phrases__word';
        span.textContent = word;
        slot.append(span);
        if (i < all.length - 1) slot.append(' ');
      });
    };

    // Altezza fissa sulla frase più lunga, così il blocco non salta quando cambia il testo
    const reserve = () => {
      phrases.style.minHeight = '';
      let tallest = 0;
      PAIRS.forEach(([a, b]) => {
        fill(what, a);
        fill(who, b);
        tallest = Math.max(tallest, phrases.offsetHeight);
      });
      phrases.style.minHeight = `${tallest}px`;
      fill(what, PAIRS[current][0]);
      fill(who, PAIRS[current][1]);
    };

    // La parola nuova affiora mentre la vecchia, lasciata al suo posto come copia, svanisce
    const crossfade = async (slot, text) => {
      const box = phrases.getBoundingClientRect();
      const old = [...slot.children].map((word) => {
        const rect = word.getBoundingClientRect();
        const copy = word.cloneNode(true);
        copy.classList.add('phrases__word--old');
        copy.style.left = `${rect.left - box.left}px`;
        copy.style.top = `${rect.top - box.top}px`;
        phrases.append(copy);
        return copy;
      });
      fill(slot, text);
      const animate = (els, frames, duration) =>
        els.map((el) => el.animate(frames, { duration, easing: EASE, fill: 'both' }).finished);
      await Promise.all([
        ...animate(old, [CLEAR, BLURRED], FADE),
        ...animate([...slot.children], [BLURRED, CLEAR], FADE * 1.15),
      ]);
      old.forEach((copy) => copy.remove());
    };

    const loop = async () => {
      for (;;) {
        await wait(PAUSE);
        if (document.hidden) continue;
        busy = true;
        current = (current + 1) % PAIRS.length;
        const [a, b] = PAIRS[current];
        await Promise.all([crossfade(what, a), wait(STAGGER).then(() => crossfade(who, b))]);
        busy = false;
      }
    };

    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
      reserve();
      loop();
    });
    let resizing;
    window.addEventListener('resize', () => {
      clearTimeout(resizing);
      const again = () => { if (busy) resizing = setTimeout(again, 300); else reserve(); };
      resizing = setTimeout(again, 200);
    });
  }

  // Anteprime video: partono solo quando sono in vista, ferme se si preferisce meno movimento
  const clips = document.querySelectorAll('video[data-autoplay]');
  if (clips.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const clipObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.play().catch(() => {});
        else entry.target.pause();
      });
    }, { threshold: 0.2 });
    clips.forEach((clip) => clipObserver.observe(clip));
  }

  // Comparsa allo scroll
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach((el) => observer.observe(el));
});
