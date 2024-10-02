// const images = [
//   './img/img-culinaria1.jpg',
//   './img/img-culinaria2.jpg',
//   './img/img-viagem.jpg',
//   './img/img-viagem1.jpg'
// ];

// let currentIndex = 0;

// function changeBackgroundImage() {
//   const card = document.querySelector('.card-background');
//   card.style.backgroundImage = `url(${images[currentIndex]})`;
//   currentIndex = (currentIndex + 1) % images.length;
// }

// setInterval(changeBackgroundImage, 5000); // Muda a imagem a cada 5 segundos








document.querySelectorAll('.motivacao-card-texto').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = '#000';
    card.style.color = '#fff';
    card.querySelector('p').style.display = 'block';
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'transparent';
    card.style.color = '#000';
    card.querySelector('p').style.display = 'none';
  });
});




