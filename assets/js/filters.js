/* AURAILS — client-side filter / sort / pagination for the list pages
   (replaces the ?genre=&year=&sort=&page= query handling done by the Laravel controllers). */
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.querySelector('.filter-form');
        var grid = document.querySelector('[data-grid]');
        if (!form || !grid) return;

        var items = Array.prototype.slice.call(grid.querySelectorAll('[data-filter-item]'));
        var pageSize = parseInt(form.getAttribute('data-page-size'), 10) || 0;   // 0 = no pagination
        var results = document.querySelector('[data-results]');
        var empty = document.querySelector('[data-empty]');
        var pagerBox = document.querySelector('[data-pagination]');
        var clearBtn = form.querySelector('.filter-clear');
        var page = 1;

        function val(name) { var el = form.elements[name]; return el ? el.value : ''; }
        function num(el, k) { return parseInt(el.getAttribute('data-' + k), 10) || 0; }

        function sortItems(list, sort) {
            var by = {
                latest: function (a, b) { return num(b, 'order') - num(a, 'order'); },
                oldest: function (a, b) { return num(a, 'order') - num(b, 'order'); },
                az:     function (a, b) { return a.dataset.title.localeCompare(b.dataset.title); },
                za:     function (a, b) { return b.dataset.title.localeCompare(a.dataset.title); },
                year:   function (a, b) { return num(b, 'year') - num(a, 'year'); }
            };
            return list.slice().sort(by[sort] || by.latest);
        }

        function bind(name, value) {
            document.querySelectorAll('[data-bind="' + name + '"]').forEach(function (el) {
                if (name === 'plural') el.textContent = value === 1 ? el.dataset.word : el.dataset.word + 's';
                else el.textContent = value;
            });
        }

        function pager(totalPages) {
            if (!pagerBox) return;
            if (totalPages <= 1) { pagerBox.innerHTML = ''; return; }
            var h = '<nav><ul class="pagination">';
            h += '<li class="page-item' + (page === 1 ? ' disabled' : '') + '"><a class="page-link" href="#" data-p="' + (page - 1) + '">&lsaquo;</a></li>';
            for (var i = 1; i <= totalPages; i++) {
                h += '<li class="page-item' + (i === page ? ' active' : '') + '"><a class="page-link" href="#" data-p="' + i + '">' + i + '</a></li>';
            }
            h += '<li class="page-item' + (page === totalPages ? ' disabled' : '') + '"><a class="page-link" href="#" data-p="' + (page + 1) + '">&rsaquo;</a></li>';
            pagerBox.innerHTML = h + '</ul></nav>';
        }

        function render() {
            var f = { genre: val('genre'), artist: val('artist'), year: val('year') }, sort = val('sort') || 'latest';
            var matched = items.filter(function (el) {
                return (!f.genre || el.dataset.genre === f.genre) &&
                       (!f.artist || el.dataset.artist === f.artist) &&
                       (!f.year || el.dataset.year === f.year);
            });
            var ordered = sortItems(matched, sort);
            var totalPages = pageSize ? Math.max(1, Math.ceil(ordered.length / pageSize)) : 1;
            if (page > totalPages) page = totalPages;
            var start = pageSize ? (page - 1) * pageSize : 0;
            var visible = pageSize ? ordered.slice(start, start + pageSize) : ordered;

            items.forEach(function (el) { el.hidden = true; });
            ordered.forEach(function (el) { grid.appendChild(el); });
            visible.forEach(function (el) { el.hidden = false; });

            var artists = {}; var earliest = null; var newCount = 0;
            ordered.forEach(function (el) {
                artists[el.dataset.artist] = 1;
                var y = parseInt(el.dataset.year, 10); if (y && (earliest === null || y < earliest)) earliest = y;
                if (el.dataset.new === '1') newCount++;
            });
            bind('count', ordered.length); bind('showing', visible.length); bind('pages', totalPages);
            bind('first', ordered.length ? start + 1 : 0); bind('last', start + visible.length);
            bind('artists', Object.keys(artists).length); bind('earliest', earliest === null ? '—' : earliest);
            bind('new', newCount); bind('plural', ordered.length);

            var active = !!(f.genre || f.artist || f.year || (sort && sort !== 'latest'));
            if (clearBtn) clearBtn.hidden = !active;
            if (results) results.hidden = ordered.length === 0;
            if (empty) empty.hidden = ordered.length !== 0;
            pager(totalPages);
        }

        function reset() {
            Array.prototype.forEach.call(form.elements, function (el) { if (el.tagName === 'SELECT') el.selectedIndex = 0; });
            page = 1; render();
        }

        form.addEventListener('change', function () { page = 1; render(); });
        if (clearBtn) clearBtn.addEventListener('click', function (e) { e.preventDefault(); reset(); });
        document.querySelectorAll('[data-clear-filters]').forEach(function (a) {
            a.addEventListener('click', function (e) { e.preventDefault(); reset(); });
        });
        if (pagerBox) pagerBox.addEventListener('click', function (e) {
            var a = e.target.closest('a[data-p]'); if (!a) return;
            e.preventDefault();
            page = parseInt(a.dataset.p, 10) || 1; render();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Allow deep links such as music.html?genre=1&year=2014&sort=az
        var qs = new URLSearchParams(location.search);
        ['genre', 'artist', 'year', 'sort'].forEach(function (k) { if (qs.get(k) && form.elements[k]) form.elements[k].value = qs.get(k); });
        render();
    });
})();
