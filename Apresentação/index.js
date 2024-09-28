const images = [
  './img/img-culinaria1.jpg',
  './img/img-culinaria2.jpg',
  './img/img-viagem.jpg',
  './img/img-viagem1.jpg'
];

let currentIndex = 0;

function changeBackgroundImage() {
  const card = document.querySelector('.card-background');
  card.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Muda a imagem a cada 5 segundos
