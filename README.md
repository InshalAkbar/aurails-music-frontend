# AURAILS — static frontend

Pure HTML / CSS / vanilla JS (Bootstrap + Font Awesome load from CDN). No PHP, MySQL or Laravel needed.
Open `index.html`, or upload the whole folder to any static host (Netlify, GitHub Pages, cPanel, etc.).

- Public site: index, music, artists, albums, videos, search, favorites, profile, user-login, user-register, 404
- Detail pages: music-N, video-N, artist-N, album-N (N = id)
- Admin panel: `admin/login.html` -> `admin/dashboard.html` (+ artists, albums, genres, languages, music, videos, reviews, users, settings)
- Data: `assets/js/data.js` (taken from DatabaseSeeder.php). CSS per page in `assets/css/`.

Demo behaviour: any email/password logs in (saved in localStorage). Forms show a toast only; nothing is stored on a server.
Favorites are kept in localStorage. Admin add/edit/delete are visual only.
