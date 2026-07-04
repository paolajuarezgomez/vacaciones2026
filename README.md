# Vacaciones 2026

PWA estatica para consultar offline el itinerario familiar de vacaciones 2026.

## Uso local

```bash
npm run serve
```

Abre `http://127.0.0.1:4173/`.

## Verificacion

```bash
npm test
```

## Offline

La app registra un service worker y cachea los archivos principales despues de la primera carga por HTTP o HTTPS. Para instalarla en movil, publicala con HTTPS, por ejemplo en GitHub Pages.

## Datos

El itinerario inicial procede de:

`/Users/paolajuarez/Desktop/IA/gmail/calendario-vacaciones-2026.html`
