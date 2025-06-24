const cardFooter = document.getElementById('card-footer');
const sharePanel = document.getElementById('share-panel');
const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
  const isActive = cardFooter.classList.toggle('active');
  sharePanel.setAttribute('aria-hidden', !isActive);
  shareLinks.forEach((link) => {
    if (visible) {
      link.setAttribute('tabindex', '0');
      link.setAttribute('href', '#'); // ou l'URL correcte
    } else {
      link.setAttribute('tabindex', '-1');
      link.removeAttribute('href');
    }
  });
});
