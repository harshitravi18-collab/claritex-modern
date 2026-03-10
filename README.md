# Claritex Modern

Marketing site, built with:

- React 19
- TypeScript
- Vite
- react-i18next / i18next
- shared primitives in `src/lib/ui`

## Run locally

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
pnpm run preview
```

## Project shape

```text
src/
  app/
  components/
  data/
  i18n/
  lib/
```

## Notes

- User-visible copy is localized through `src/i18n/resources/*`
- Shared UI and utility code lives in `src/lib`
- Section components stay focused on presentation and light interaction
