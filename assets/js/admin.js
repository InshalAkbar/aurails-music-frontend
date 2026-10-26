/* AURAILS Admin — static demo behaviour (no server). Delete/save/logout are mock handlers. */
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        // Delete buttons: confirm, then remove the row from the page only
        document.addEventListener('click', function (e) {
            var b = e.target.closest('[data-delete]'); if (!b) return;
            if (!confirm(b.getAttribute('data-delete') || 'Are you sure?')) return;
            var row = b.closest('tr'); if (row) row.remove();
            Aurails.showToast('Deleted (demo only — reload restores it).');
        });

        var lo = document.getElementById('adminLogout');
        if (lo) lo.addEventListener('click', function () {
            Aurails.showToast('Logged out.');
            setTimeout(function () { window.location.href = lo.getAttribute('data-href') || 'login.html'; }, 600);
        });

        // Settings: preview the chosen logo locally
        var li = document.getElementById('logoInput');
        if (li) li.addEventListener('change', function (e) {
            var file = e.target.files[0]; if (!file) return;
            var r = new FileReader();
            r.onload = function (ev) {
                var img = document.getElementById('logoPreview'); img.src = ev.target.result; img.style.display = 'block';
                var ph = document.getElementById('logoPlaceholder'); if (ph) ph.style.display = 'none';
            };
            r.readAsDataURL(file);
        });
    });
})();
