const menuButton = document.querySelector('#menu');
const menuItems = document.querySelector('#nav-list');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hide');
});

function handleResize() {
    const menu = document.querySelector('#nav-list');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

handleResize(); // Call it once to set the initial state
window.addEventListener('resize', handleResize); //listen for resize events

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    const dialog = document.createElement('dialog');
    dialog.classList.add('image-viewer');

    dialog.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-viewer">X</button>
    `;

    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.querySelector('.close-viewer').addEventListener('click', () => {
      dialog.close();
      dialog.remove();
    });
  });
});

// Get DOM elements
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img'); // assume you already have <img> inside <dialog>
const closeButton = modal.querySelector('.close-viewer');

// 1. Open modal when an image is clicked
gallery.addEventListener('click', function (event) {
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  // get the name of the image, like "norris-sm.jpeg"
  const src = clickedImg.getAttribute('src');
  const alt = clickedImg.getAttribute('alt');

  // switch to full-size image
  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modalImage.setAttribute('src', fullSrc);
  modalImage.setAttribute('alt', alt);

  modal.showModal();
});

// 2. Close modal when close button is clicked
closeButton.addEventListener('click', function () {
  modal.close();
});

// 3. Close modal when clicking outside the image
modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.close();
  }
});

