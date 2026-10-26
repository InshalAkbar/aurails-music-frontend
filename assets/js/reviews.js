/* AURAILS — review form (mock). Adds the review to the page only; nothing is stored. */
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('reviewForm');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var rating = parseInt((form.querySelector('input[name="review_rating"]:checked') || {}).value, 10);
            var text = form.elements.review_text.value.trim();
            if (!rating || !text) { Aurails.showToast('Please choose a rating and write a review.', 'error'); return; }
            var user = Aurails.getUser() || { name: 'You' };
            var stars = '';
            for (var i = 1; i <= 5; i++) stars += '<i class="' + (i <= rating ? 'fa-solid' : 'fa-regular') + ' fa-star"></i>';
            var el = document.createElement('div');
            el.className = 'review-item';
            el.innerHTML = '<div class="review-avatar">' + Aurails.escapeHtml((user.name || 'U').charAt(0).toUpperCase()) + '</div>' +
                '<div class="review-body"><div class="review-head"><div class="review-user">' + Aurails.escapeHtml(user.name) + '</div>' +
                '<div class="review-date">just now</div></div><div class="review-stars">' + stars + '</div>' +
                '<p class="review-text">' + Aurails.escapeHtml(text) + '</p></div>';
            var list = document.getElementById('reviewsList');
            list.insertBefore(el, list.firstChild);
            var none = document.getElementById('noReviews'); if (none) none.hidden = true;
            var c = document.getElementById('reviewCount'); if (c) c.textContent = (parseInt(c.textContent, 10) || 0) + 1;
            form.reset();
            Aurails.showToast('Review submitted (demo only — not saved).');
        });
    });
})();
