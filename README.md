# Portfolio Professionale - Dr. Aamatu

Sito portfolio personale per Dr. Aamatu, oncologo clinico specializzato in clinical trials e studi di fase 1.

## Tecnologie

- **Static Site Generator:** Hugo 0.123.7
- **Design:** Tema custom moderno con Tailwind CSS
- **Hosting:** GitHub Pages
- **Deploy:** GitHub Actions (automatico su push)

## Struttura del Progetto

```
.
├── content/              # Pagine e articoli in Markdown
│   ├── _index.md        # Homepage
│   ├── about.md         # Pagina Chi Sono
│   ├── contact.md       # Contatti
│   └── studi/           # Articoli scientifici
├── layouts/             # Template HTML
├── static/              # File statici (CSS, JS, immagini)
├── archetypes/          # Template per nuovi articoli
├── hugo.toml            # Configurazione Hugo
└── .github/workflows/   # GitHub Actions (deploy automatico)
```

## Come Aggiornare il Sito

### Modificare il Contenuto

1. **Homepage:** Modifica `content/_index.md`
2. **Chi sono:** Modifica `content/about.md`
3. **Contatti:** Modifica `content/contact.md`
4. **Aggiungere studi:** Crea un nuovo file in `content/studi/`

### Creare un Nuovo Studio/Articolo

```bash
hugo new studi/mio-studio.md
```

Quindi modifica il file con i dettagli dello studio.

### Testare Localmente

```bash
hugo server -D
```

Visita `http://localhost:1313` per vedere il sito.

## Deploy Automatico

Ogni volta che fai un commit e push:

1. GitHub Actions triggera il workflow `hugo.yml`
2. Hugo compila il sito
3. Il sito viene pubblicato automaticamente su GitHub Pages

Il tuo sito sarà disponibile all'URL: `https://aamatu.github.io`

## Configurazione SEO

La configurazione SEO è in `hugo.toml`:
- Meta tags
- Sitemap (generato automaticamente)
- Robots.txt (generato automaticamente)
- Open Graph tags

## Personalizzazione

### Colori

Per cambiare i colori, modifica il file `layouts/_default/baseof.html`:
- Colore sfondo: `bg-slate-900`
- Colore testo: `text-slate-100`
- Colore accent (link): `text-blue-400`

### Metadati del Sito

Modifica `hugo.toml`:
- Title
- Author
- Description
- Social links

## Prossimi Passi

1. ✅ Setup Hugo e struttura base
2. ⬜ Aggiungere contenuto personale (bio, studi, foto)
3. ⬜ Personalizzare colori e design
4. ⬜ Testare il sito live su GitHub Pages
5. ⬜ Configurare SEO metadata completo

---

**Sito generato con Hugo e ospitato su GitHub Pages**
