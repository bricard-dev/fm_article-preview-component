const isProd = location.hostname === 'bricard-dev.github.io';
const css = document.createElement('link');
const cardFooter = document.getElementById('card-footer');
const sharePanel = document.getElementById('share-panel');
const shareButton = document.getElementById('share-button');

css.rel = 'stylesheet';
css.href = isProd
  ? '/fm_article-preview-component/css/main.css'
  : './css/main.css';
document.head.appendChild(css);

shareButton.addEventListener('click', () => {
  const isActive = cardFooter.classList.toggle('active');
  sharePanel.setAttribute('aria-hidden', !isActive);
});
