/* AURAILS — profile page (mock). Reads the demo session from localStorage; nothing is sent anywhere. */
(function () {
    'use strict';
    var esc = Aurails.escapeHtml;
    document.addEventListener('DOMContentLoaded', function () {
        var user = Aurails.getUser();
        if (!user) { window.location.replace('user-login.html?next=profile.html'); return; }

        // fill from the session
        var name = user.name || 'User', letter = name.charAt(0).toUpperCase();
        document.getElementById('heroName').textContent = name;
        document.getElementById('heroEmail').textContent = user.email || '';
        document.getElementById('heroAvatar').textContent = letter;
        document.getElementById('avatarLetter').textContent = letter;
        document.getElementById('profileEmail').value = user.email || '';
        var f = document.getElementById('profileForm');
        f.elements.user_name.value = name;
        f.elements.user_phone.value = user.phone || '';
        f.elements.user_address.value = user.address || '';

        // tabs
        document.querySelectorAll('.tab-btn').forEach(function (b) {
            b.addEventListener('click', function () {
                document.querySelectorAll('.tab-btn').forEach(function (x) { x.classList.remove('active'); });
                document.querySelectorAll('.tab-content').forEach(function (x) { x.classList.remove('active'); });
                b.classList.add('active');
                document.getElementById('tab-' + b.dataset.tab).classList.add('active');
            });
        });

        // favorites summary
        var D = AURAILS_DATA, albumById = {}, artistById = {};
        D.albums.forEach(function (a) { albumById[a.id] = a; }); D.artists.forEach(function (a) { artistById[a.id] = a; });
        var favs = Aurails.getFavs().map(function (id) { return albumById[id]; }).filter(Boolean);
        document.getElementById('statFavs').textContent = favs.length;
        if (favs.length) {
            document.getElementById('recentFavsSection').hidden = false;
            document.getElementById('miniFavs').innerHTML = favs.slice(0, 4).map(function (a) {
                return '<a href="album-' + a.id + '.html" class="mini-card"><div class="mini-card-img"><img src="' + esc(a.cover) + '" alt="' + esc(a.name) + '"></div>' +
                    '<div class="mini-card-info"><div class="mini-card-title">' + esc(a.name) + '</div><div class="mini-card-sub">' + esc((artistById[a.artistId] || {}).name || 'Unknown') + '</div></div></a>';
            }).join('');
        }

        // avatar preview (not stored)
        function preview(file) {
            if (!file) return;
            var r = new FileReader();
            r.onload = function (e) {
                var img = document.getElementById('avatarPreview'); img.src = e.target.result; img.style.display = 'block';
                document.getElementById('avatarLetter').style.display = 'none';
                var big = document.getElementById('heroAvatar');
                big.innerHTML = '<img class="avatar-img-display" alt="" src="' + e.target.result + '">';
            };
            r.readAsDataURL(file);
        }
        document.getElementById('avatarInput').addEventListener('change', function (e) { preview(e.target.files[0]); });
        document.getElementById('quickAvatarInput').addEventListener('change', function (e) {
            preview(e.target.files[0]); Aurails.showToast('Photo updated (demo only — not stored).');
        });

        // profile / password forms
        f.addEventListener('submit', function (e) {
            e.preventDefault();
            user.name = f.elements.user_name.value.trim() || user.name;
            user.phone = f.elements.user_phone.value; user.address = f.elements.user_address.value;
            Aurails.login(user); Aurails.applyAuthState();
            document.getElementById('heroName').textContent = user.name;
            Aurails.showToast('Profile updated successfully!');
        });
        var pf = document.getElementById('passwordForm');
        pf.addEventListener('submit', function (e) {
            e.preventDefault();
            if (pf.elements.password.value.length < 6) { Aurails.showToast('New password must be at least 6 characters.', 'error'); return; }
            if (pf.elements.password.value !== pf.elements.password_confirmation.value) { Aurails.showToast('Passwords do not match.', 'error'); return; }
            pf.reset(); Aurails.showToast('Password updated (demo only).');
        });
    });
})();
