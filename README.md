# My simple starter for Svelte APP

- [X] Snowpack
- [X] Routify
- [ ] SSR || SSG
- [X] [Secure context](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8)
- [ ] API REST
- [ ] Test
- [ ] Typescript
- [ ] Service worker + Push notifications
- [ ] material design (SMUI)
- [X] material design (Materialify)

## Installation

```bash
npx degit PeufOne/start myNewProject

cd myNewProject

npm install
```

## Developpement

```bash
npm run dev
```

## Production

```bash
npm run build

npm run serve
```

## Enable secure context

If you want to install certificat to use `https://localhost/8080` you can enable secure context on `snowpack.config.js` :

```diff
devOptions: {
-   secure: false
+   secure: true
}
```
