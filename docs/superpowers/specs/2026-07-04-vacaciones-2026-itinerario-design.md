# Vacaciones 2026 - Itinerario familiar offline

## Objetivo

Crear una PWA estatica para consultar en movil el itinerario familiar de vacaciones 2026. La app debe funcionar offline, sin login, sin Gmail y sin servidor durante el viaje.

## Fuente inicial de datos

La primera version usa los datos existentes en:

- `/Users/paolajuarez/Desktop/IA/gmail/calendario-vacaciones-2026.html`

El itinerario cubre del 10 de julio al 2 de agosto de 2026 e incluye alojamientos, parcelas, horas de entrada, actividades y dias pendientes de revisar.

## Experiencia de usuario

La app se abrira directamente en el itinerario, optimizado para telefono. La pantalla inicial mostrara:

- Cabecera compacta con titulo, rango de fechas y estado general.
- Tarjeta destacada del proximo dia relevante cuando la fecha actual este dentro o cerca del viaje.
- Navegacion por pestanas: Itinerario, Pendientes y Alojamientos.
- Lista visual de dias con alojamiento, detalle, hora de entrada, actividades y estado.

Los estados visibles seran:

- Confirmado: alojamiento o actividad ya localizado.
- Revisar: informacion incompleta o sin reserva encontrada.
- Fin: vuelta de vacaciones.

## Vistas

### Itinerario

Lista completa por dias. Cada dia tendra una tarjeta con color propio segun alojamiento, fecha, dia de semana, lugar, detalle, hora de entrada y actividades.

### Pendientes

Filtro de dias con estado `revisar`, inicialmente:

- 10 de julio de 2026
- 31 de julio de 2026
- 1 de agosto de 2026

### Alojamientos

Resumen agrupado por alojamiento, con rango de noches y detalles principales:

- La Marina Resort
- Bravoplaya Resort
- Camping Riberamar
- La Siesta Salou
- Zaragoza Camping
- Camping Osuna, Madrid
- Camping de Caceres

## Arquitectura

La app sera un proyecto estatico sin dependencias nuevas:

- `index.html`: estructura HTML y contenedor de la app.
- `styles.css`: diseno responsive mobile-first.
- `app.js`: datos del viaje, renderizado y logica de pestanas.
- `manifest.webmanifest`: metadatos de instalacion PWA.
- `service-worker.js`: cache offline de los recursos estaticos.

Los datos viviran como objetos JavaScript en `app.js`. No habra escritura local ni sincronizacion remota en esta version.

## Offline

El service worker cacheara los recursos principales para que la app siga cargando sin conexion despues de la primera visita servida por HTTP. La app tambien funcionara como HTML estatico para consulta local, aunque la instalacion PWA requiere servirla por HTTP o HTTPS.

## Errores y estados vacios

Si no hay dias pendientes, la vista Pendientes mostrara un mensaje breve. Si el navegador no soporta service workers, la app seguira funcionando online o abierta localmente, pero no garantizara cache offline.

## Validacion

Antes de cerrar:

- Servir la app localmente por HTTP.
- Comprobar que `index.html` carga sin errores JavaScript.
- Comprobar que el service worker se registra.
- Revisar el diseno en viewport movil y escritorio.

## Fuera de alcance

No se incluye en esta primera version:

- Conexion directa a Gmail.
- Edicion desde movil.
- Backend, base de datos o autenticacion.
- Instalacion de dependencias nuevas.
- Publicacion en GitHub Pages.
