const track = document.getElementById('carouselTrack');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

if (track && prev && next) {
  next.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth * 0.4, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth * 0.4, behavior: 'smooth' });
  });
}
