/* AURAILS — search (client-side over AURAILS_DATA; replaces SearchController). */
(function () {
    'use strict';
    var esc = function (s) { return Aurails.escapeHtml(s); };
    var D = AURAILS_DATA;
    var artistById = {}; D.artists.forEach(function (a) { artistById[a.id] = a; });
    var albumById = {};  D.albums.forEach(function (a) { albumById[a.id] = a; });
    var has = function (hay, q) { return (hay || '').toLowerCase().indexOf(q) !== -1; };
    var an = function (id) { return (artistById[id] || {}).name || 'Unknown'; };
    var plural = function (w, n) { return n === 1 ? w : w + 's'; };

    function section(icon, title, count, inner) {
        return '<section class="section"><div class="section-head"><div><h2 class="section-title"><span class="icon-badge"><i class="fa-solid fa-' + icon + '"></i></span>' + title +
            '</h2><p class="section-sub">' + count + ' found</p></div></div>' + inner + '</section>';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var q = (new URLSearchParams(location.search).get('q') || '').trim();
        var box = document.getElementById('searchResults');
        var title = document.getElementById('searchTitle'), desc = document.getElementById('searchDesc');
        var ql = q.toLowerCase();

        if (!q) {
            box.innerHTML = '<div class="empty-state-wrap"><div class="empty-visual"><div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>' +
                '<div class="empty-pulse pulse-1"></div><div class="empty-pulse pulse-2"></div><div class="empty-pulse pulse-3"></div></div>' +
                '<h2 class="empty-title">Start Searching</h2><p class="empty-desc">Type in the search bar above to find music, artists, albums, and videos.</p>' +
                '<div class="search-suggestions"><span class="sugg-label">Try searching for:</span><div class="sugg-list">' +
                ['Atif Aslam:Atif', 'Taylor Swift:Taylor', 'Aadat:Aadat', 'Ghoomar:Ghoomar', 'Pop:Pop'].map(function (x) {
                    var p = x.split(':'); return '<a href="search.html?q=' + encodeURIComponent(p[1]) + '" class="sugg-chip">' + p[0] + '</a>';
                }).join('') + '</div></div></div>';
            return;
        }

        var artists = D.artists.filter(function (a) { return has(a.name, ql) || has(a.bio, ql); }).slice(0, 12);
        var music = D.music.filter(function (m) {
            var al = albumById[m.albumId];
            return has(m.title, ql) || has(m.description, ql) || has(an(m.artistId), ql) || (al && has(al.name, ql));
        }).sort(function (a, b) { return b.id - a.id; }).slice(0, 20);
        var albums = D.albums.filter(function (a) { return has(a.name, ql) || has(a.description, ql) || has(an(a.artistId), ql); }).sort(function (a, b) { return b.id - a.id; }).slice(0, 12);
        var videos = D.videos.filter(function (v) { return has(v.title, ql) || has(v.description, ql) || has(an(v.artistId), ql); }).sort(function (a, b) { return b.id - a.id; }).slice(0, 12);
        var total = artists.length + music.length + albums.length + videos.length;

        document.title = 'AURAILS — Search: ' + q;
        title.innerHTML = 'Results for <span class="page-gradient">"' + esc(q) + '"</span>';

        if (!total) {
            desc.textContent = '0 results found across music, artists, albums and videos.';
            box.innerHTML = '<div class="empty-state-wrap"><div class="empty-visual"><div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>' +
                '<div class="empty-pulse pulse-1"></div><div class="empty-pulse pulse-2"></div><div class="empty-pulse pulse-3"></div></div>' +
                '<h2 class="empty-title">No results found</h2><p class="empty-desc">Humm... we couldn\'t find anything matching "<strong style="color: var(--accent);">' + esc(q) + '</strong>". Try a different keyword or explore our music.</p>' +
                '<div class="empty-actions"><a href="music.html" class="btn-primary-glow"><span><i class="fa-solid fa-music me-2"></i> Browse Music</span></a>' +
                '<a href="artists.html" class="btn-ghost"><i class="fa-solid fa-microphone"></i> View Artists</a></div></div>';
            return;
        }
        desc.textContent = total + ' ' + plural('result', total) + ' found across music, artists, albums and videos.';

        var html = '';
        if (artists.length) html += section('microphone', 'Artists', artists.length, '<div class="artist-row">' + artists.map(function (a) {
            return '<a href="artist-' + a.id + '.html" class="artist-bubble"><div class="artist-ring"><div class="artist-avatar"><img src="' + esc(a.image) + '" alt="' + esc(a.name) + '"></div><div class="artist-glow"></div></div><div class="artist-name-sm">' + esc(a.name) + '</div></a>';
        }).join('') + '</div>');
        if (music.length) html += section('music', 'Music', music.length, '<div class="grid grid-4">' + music.map(function (m) {
            return '<a href="music-' + m.id + '.html" class="music-card"><div class="music-img-wrap"><img src="' + esc(m.image) + '" alt="' + esc(m.title) + '" class="music-img"><div class="music-overlay"><div class="play-btn"><i class="fa-solid fa-play"></i></div></div>' +
                (m.isNew ? '<span class="badge-new">New</span>' : '') + '</div><div class="music-info"><h3 class="music-title">' + esc(m.title) + '</h3><div class="music-artist"><i class="fa-solid fa-user"></i>' + esc(an(m.artistId)) + '</div></div></a>';
        }).join('') + '</div>');
        if (albums.length) html += section('compact-disc', 'Albums', albums.length, '<div class="grid grid-4">' + albums.map(function (a) {
            return '<a href="album-' + a.id + '.html" class="music-card"><div class="music-img-wrap"><img src="' + esc(a.cover) + '" alt="' + esc(a.name) + '" class="music-img"><div class="music-overlay"><div class="play-btn"><i class="fa-solid fa-play"></i></div></div><span class="badge-year">' + esc(a.year) + '</span></div>' +
                '<div class="music-info"><h3 class="music-title">' + esc(a.name) + '</h3><div class="music-artist"><i class="fa-solid fa-user"></i>' + esc(an(a.artistId)) + '</div></div></a>';
        }).join('') + '</div>');
        if (videos.length) html += section('video', 'Videos', videos.length, '<div class="grid grid-4">' + videos.map(function (v) {
            return '<a href="video-' + v.id + '.html" class="music-card"><div class="video-img-wrap"><img src="' + esc(v.image) + '" alt="' + esc(v.title) + '" class="music-img"><div class="video-overlay"><div class="play-btn"><i class="fa-solid fa-play"></i></div></div><span class="badge-year">' + esc(v.duration) + '</span></div>' +
                '<div class="music-info"><h3 class="music-title">' + esc(v.title) + '</h3><div class="music-artist"><i class="fa-solid fa-user"></i>' + esc(an(v.artistId)) + '</div></div></a>';
        }).join('') + '</div>');
        box.innerHTML = html;
    });
})();
