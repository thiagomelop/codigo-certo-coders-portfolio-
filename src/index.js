

document.querySelectorAll('.motivacao-card-texto').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#fff';
    card.style.color = '#fff';
    card.querySelector('p').style.display = 'block';
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'transparent';
    card.style.color = '#000';
    card.querySelector('p').style.display = 'none';
  });
});




