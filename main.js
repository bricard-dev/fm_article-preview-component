const cardFooter = document.getElementById('card-footer');
const sharePanel = document.getElementById('share-panel');
const shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', () => {
  const isActive = cardFooter.classList.toggle('active');
  sharePanel.setAttribute('aria-hidden', !isActive);
});
