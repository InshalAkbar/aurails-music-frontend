/* AURAILS — login / register (mock). Any credentials work; the session lives in localStorage only. */
(function () {
    'use strict';
    var KNOWN = {};
    AURAILS_DATA.users.forEach(function (u) { KNOWN[u.email.toLowerCase()] = u; });

    function showError(msgs) {
        var box = document.getElementById('formAlert');
        document.getElementById('formAlertText').innerHTML = msgs.map(function (m) { return '<div>' + Aurails.escapeHtml(m) + '</div>'; }).join('');
        box.hidden = false;
    }
    function nextUrl() {
        var n = new URLSearchParams(location.search).get('next');
        return n && /^[a-z0-9_\-]+\.html$/i.test(n) ? n : 'index.html';   // only allow local pages
    }

    document.addEventListener('DOMContentLoaded', function () {
        var lf = document.getElementById('loginForm');
        if (lf) lf.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = lf.elements.email.value.trim(), pass = lf.elements.password.value;
            if (!email || !pass) { showError(['Please enter your email and password.']); return; }
            var known = KNOWN[email.toLowerCase()];
            var user = known ? { name: known.name, email: known.email, phone: known.phone, address: known.address, role: known.role }
                             : { name: email.split('@')[0], email: email, phone: '', address: '', role: 'user' };
            Aurails.login(user);
            Aurails.showToast('Welcome back, ' + user.name + '!');
            setTimeout(function () { window.location.href = nextUrl(); }, 700);
        });

        var rf = document.getElementById('registerForm');
        if (rf) rf.addEventListener('submit', function (e) {
            e.preventDefault();
            var errs = [], f = rf.elements;
            if (f.password.value.length < 6) errs.push('The password must be at least 6 characters.');
            if (f.password.value !== f.password_confirmation.value) errs.push('The password confirmation does not match.');
            if (errs.length) { showError(errs); return; }
            Aurails.login({ name: f.name.value.trim(), email: f.email.value.trim(), phone: f.phone.value, address: f.address.value, role: 'user' });
            Aurails.showToast('Account created! Welcome to Aurails.');
            setTimeout(function () { window.location.href = 'index.html'; }, 800);
        });
    });
})();
