const track = document.getElementById("carouselTrack");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

if (track && prev && next) {
  const getScrollAmount = () => {
    const firstItem = track.querySelector(".carousel-item");

    if (!firstItem) {
      return track.clientWidth * 0.85;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

    return firstItem.getBoundingClientRect().width + gap;
  };

  next.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });
}
