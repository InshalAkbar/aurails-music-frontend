/* AURAILS — favorites page, rendered from localStorage (replaces FavoriteController). */
(function () {
    'use strict';
    var esc = Aurails.escapeHtml;
    document.addEventListener('DOMContentLoaded', function () {
        if (!Aurails.getUser()) {   // original route is behind the "auth" middleware
            window.location.replace('user-login.html?next=favorites.html');
            return;
        }
        var D = AURAILS_DATA, grid = document.getElementById('favGrid');
        var albumById = {}; D.albums.forEach(function (a) { albumById[a.id] = a; });
        var artistById = {}; D.artists.forEach(function (a) { artistById[a.id] = a; });

        function render() {
            var favs = Aurails.getFavs().map(function (id) { return albumById[id]; }).filter(Boolean);
            var has = favs.length > 0;
            document.getElementById('favStats').hidden = !has;
            document.getElementById('favSection').hidden = !has;
            document.getElementById('favEmpty').hidden = has;
            if (!has) return;
            var uniq = {}; favs.forEach(function (a) { uniq[a.artistId] = 1; });
            document.getElementById('favCount').textContent = favs.length;
            document.getElementById('favCount2').textContent = favs.length;
            document.getElementById('favArtists').textContent = Object.keys(uniq).length;
            grid.innerHTML = favs.map(function (a) {
                return '<div class="album-card-wrapper"><a href="album-' + a.id + '.html" class="album-card"><div class="album-img-wrap">' +
                    '<img src="' + esc(a.cover) + '" alt="' + esc(a.name) + '" class="album-img">' +
                    '<div class="album-overlay"><div class="play-btn"><i class="fa-solid fa-play"></i></div></div>' +
                    '<span class="badge-year">' + esc(a.year) + '</span><div class="badge-heart"><i class="fa-solid fa-heart"></i></div></div>' +
                    '<div class="album-info"><h3 class="album-title">' + esc(a.name) + '</h3><div class="album-artist"><i class="fa-solid fa-user"></i> ' +
                    esc((artistById[a.artistId] || {}).name || 'Unknown') + '</div></div></a>' +
                    '<div class="remove-form"><button type="button" class="remove-btn" data-remove="' + a.id + '" title="Remove from Favorites"><i class="fa-solid fa-xmark"></i></button></div></div>';
            }).join('');
        }
        grid.addEventListener('click', function (e) {
            var b = e.target.closest('[data-remove]'); if (!b) return;
            if (!confirm('Remove this album from favorites?')) return;
            Aurails.removeFavorite(parseInt(b.dataset.remove, 10));
            render(); Aurails.showToast('Removed from favorites.');
        });
        render();
    });
})();
