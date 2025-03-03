// Open modal and load video
function openModal(url) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("videoIframe").src = url;
}

// Close modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById("videoIframe").src = ""; // Stop video when closing
}

// Lazy loading for images
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('.lazy');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.getAttribute('data-src');
        image.classList.remove('lazy');
        observer.unobserve(image);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, options);
  lazyImages.forEach(image => observer.observe(image));
});
