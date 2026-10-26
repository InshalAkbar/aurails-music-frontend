/* AURAILS — shared frontend behaviour (static build)
   Replaces: Laravel session/auth, CSRF forms, flash messages, route() redirects.
   Auth is a front-end mock stored in localStorage — NOT real security. */
(function () {
    'use strict';

    var FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
        '<rect width="400" height="400" fill="#0F172A"/>' +
        '<text x="200" y="235" font-size="120" text-anchor="middle" fill="#14B8A6" font-family="Arial">\u266A</text></svg>'
    );

    /* ---------- Theme ---------- */
    function updateThemeIcon() {
        var theme = document.documentElement.getAttribute('data-theme') || 'dark';
        var icon = document.getElementById('themeIcon');
        if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
    function toggleTheme() {
        var next = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('aurails-theme', next); } catch (e) {}
        updateThemeIcon();
    }

    /* ---------- Mobile menu ---------- */
    function setMenu(open) {
        var menu = document.getElementById('navMenu');
        var overlay = document.getElementById('mobileOverlay');
        var icon = document.getElementById('burgerIcon');
        if (!menu) return;
        menu.classList.toggle('show', open);
        overlay.classList.toggle('active', open);
        icon.classList.toggle('fa-xmark', open);
        icon.classList.toggle('fa-bars', !open);
        document.body.style.overflow = open ? 'hidden' : '';
    }
    function toggleMobileMenu() { setMenu(!document.getElementById('navMenu').classList.contains('show')); }
    function closeMobileMenu() { setMenu(false); }

    /* ---------- Toast ---------- */
    function showToast(message, type) {
        type = type || 'success';
        var wrap = document.createElement('div');
        wrap.style.cssText = 'position:fixed;bottom:110px;right:20px;z-index:9999;max-width:calc(100vw - 40px);';
        var toast = document.createElement('div');
        toast.style.cssText =
            'display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:12px;font-weight:600;font-size:13.5px;' +
            'box-shadow:0 12px 30px rgba(0,0,0,0.4);' +
            'background:' + (type === 'success' ? 'linear-gradient(135deg,#14B8A6,#0D9488)' : 'linear-gradient(135deg,#EF4444,#DC2626)') + ';' +
            'color:' + (type === 'success' ? '#08111A' : 'white') + ';';
        var i = document.createElement('i');
        i.className = 'fa-solid ' + (type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation');
        toast.appendChild(i);
        toast.appendChild(document.createTextNode(' ' + message));   // textContent-safe
        wrap.appendChild(toast);
        document.body.appendChild(wrap);
        setTimeout(function () {
            toast.style.transition = 'all 0.4s ease';
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(120%)';
            setTimeout(function () { wrap.remove(); }, 400);
        }, 3200);
    }

    /* ---------- Share / copy ---------- */
    function shareOn(platform, url, title) {
        var u = encodeURIComponent(url), t = encodeURIComponent(title || '');
        var map = {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + u,
            twitter:  'https://twitter.com/intent/tweet?url=' + u + '&text=' + t,
            whatsapp: 'https://wa.me/?text=' + encodeURIComponent((title || '') + ' ' + url),
            telegram: 'https://t.me/share/url?url=' + u + '&text=' + t,
            linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + u
        };
        if (map[platform]) window.open(map[platform], '_blank', 'width=600,height=500');
    }
    function copyLink(url) {
        url = url || window.location.href;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(function () { showToast('Link copied!'); });
        } else {
            var input = document.createElement('input');
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
            showToast('Link copied!');
        }
    }

    /* ---------- Mock auth (localStorage) ---------- */
    var USER_KEY = 'aurails-user';
    function getUser() {
        try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch (e) { return null; }
    }
    function login(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        if (localStorage.getItem('aurails-favs') === null) localStorage.setItem('aurails-favs', JSON.stringify([1, 4, 5])); // demo content
    }
    function logout() { localStorage.removeItem(USER_KEY); }

    function applyAuthState() {
        var user = getUser();
        document.querySelectorAll('[data-auth="guest"]').forEach(function (el) { el.hidden = !!user; });
        document.querySelectorAll('[data-auth="user"]').forEach(function (el) { el.hidden = !user; });
        if (user) {
            var name = user.name || 'User';
            var n = document.getElementById('userName'), a = document.getElementById('userAvatar'), c = document.getElementById('userChip');
            if (n) n.textContent = name;
            if (a) a.textContent = name.charAt(0).toUpperCase();
            if (c) c.title = name;
        }
    }

    /* ---------- Favorites (localStorage; replaces the favorites table) ---------- */
    var FAV_KEY = 'aurails-favs';
    function getFavs() {
        try { var v = JSON.parse(localStorage.getItem(FAV_KEY)); return Array.isArray(v) ? v : []; } catch (e) { return []; }
    }
    function setFavs(list) { localStorage.setItem(FAV_KEY, JSON.stringify(list)); }
    function addFavorite(albumId) {
        if (!getUser()) {
            showToast('Please login to save favorites.', 'error');
            setTimeout(function () { window.location.href = 'user-login.html?next=' + encodeURIComponent(location.pathname.split('/').pop()); }, 900);
            return;
        }
        if (!albumId) { showToast('This item has no album to save.', 'error'); return; }
        var list = getFavs();
        if (list.indexOf(albumId) !== -1) { showToast('Already in your favorites.'); return; }
        list.unshift(albumId); setFavs(list);
        showToast('Album added to favorites!');
    }
    function removeFavorite(albumId) { setFavs(getFavs().filter(function (i) { return i !== albumId; })); }
    function escapeHtml(str) {
        return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* ---------- Init ---------- */
    document.addEventListener('DOMContentLoaded', function () {
        updateThemeIcon();
        applyAuthState();

        var t = document.getElementById('themeToggle'); if (t) t.addEventListener('click', toggleTheme);
        var b = document.getElementById('burger');      if (b) b.addEventListener('click', toggleMobileMenu);
        var o = document.getElementById('mobileOverlay'); if (o) o.addEventListener('click', closeMobileMenu);

        // Image fallback (original used via.placeholder.com, which is offline now)
        document.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('error', function () {
                if (!this.dataset.fb) { this.dataset.fb = 'true'; this.src = FALLBACK_IMG; }
            });
        });

        // Search: no server — go to search.html?q=… which filters AURAILS_DATA client-side
        var form = document.getElementById('searchForm');
        if (form) {
            var input = form.querySelector('input'), clear = document.getElementById('searchClear');
            var q0 = new URLSearchParams(location.search).get('q');
            if (q0 && document.body.dataset.page === 'search') { input.value = q0; }
            var sync = function () { if (clear) clear.hidden = !input.value; };
            input.addEventListener('input', sync); sync();
            if (clear) clear.addEventListener('click', function () { input.value = ''; sync(); input.focus(); });
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                var q = input.value.trim();
                if (!q) { showToast('Type something to search.', 'error'); return; }
                window.location.href = 'search.html?q=' + encodeURIComponent(q);
            });
        }

        // Logout
        var lo = document.getElementById('logoutBtn');
        if (lo) lo.addEventListener('click', function () {
            logout(); applyAuthState(); showToast('Logged out successfully.');
        });

        // Player play/pause (visual only)
        var pp = document.getElementById('playerPlay');
        if (pp) pp.addEventListener('click', function () {
            var i = pp.querySelector('i');
            var playing = i.classList.toggle('fa-pause');
            i.classList.toggle('fa-play', !playing);
        });

        // Any form still carrying a data-mock attribute gets a safe demo handler
        document.querySelectorAll('form[data-mock]').forEach(function (f) {
            f.addEventListener('submit', function (e) {
                e.preventDefault();
                showToast(f.getAttribute('data-mock') || 'Submitted (demo only).');
                var to = f.getAttribute('data-redirect');
                if (to) setTimeout(function () { window.location.href = to; }, 900);
            });
        });
    });

    // Public API for page scripts
    window.Aurails = {
        showToast: showToast, shareOn: shareOn, copyLink: copyLink,
        toggleTheme: toggleTheme, closeMobileMenu: closeMobileMenu,
        getUser: getUser, login: login, logout: logout, applyAuthState: applyAuthState,
        getFavs: getFavs, setFavs: setFavs, addFavorite: addFavorite, removeFavorite: removeFavorite, escapeHtml: escapeHtml,
        data: function () { return window.AURAILS_DATA; }
    };
    // Back-compat with inline handlers copied from the Blade pages
    window.showToast = showToast; window.shareOn = shareOn; window.copyLink = copyLink;
    window.toggleTheme = toggleTheme; window.toggleMobileMenu = toggleMobileMenu; window.closeMobileMenu = closeMobileMenu;
})();
