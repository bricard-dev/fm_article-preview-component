const shareButton = document.getElementById('share-button');
const cardFooter = document.getElementById('card-footer');

shareButton.addEventListener('click', () => {
  cardFooter.classList.toggle('active');
});
