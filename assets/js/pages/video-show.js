/* Click-to-load YouTube player (copied from the original video_show page). */
function loadYoutube(el, videoId) {
    var iframe = document.createElement('iframe');
    iframe.className = 'yt-embed';
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
    el.innerHTML = '';
    el.appendChild(iframe);
    el.style.cursor = 'default';
    el.classList.remove('yt-lazy');
}
