# Dr.Cita — Marketing Site

Jekyll site for [drcita.co](https://drcita.co). Deployed via GitHub Pages from `drcita/drcita.github.io`.

## Prerequisites

- Ruby (any 3.x)
- Bundler (`gem install bundler`)

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000).

Use `--port 4001` if port 4000 is busy:

```bash
bundle exec jekyll serve --port 4001
```

## Deploy

Push to `main` branch — GitHub Pages builds and deploys automatically.

```bash
git push origin main
```

## Structure

```
_config.yml        # Site config, variables
_layouts/          # Page layouts
_includes/         # Header, footer partials
_sass/             # SCSS design system (tokens, components)
assets/            # CSS entry, JS, images
index.html         # Homepage
CNAME              # Custom domain (drcita.co)
```
