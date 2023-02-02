const closeBtn = document.querySelector('.sidebar-close-btn');

const toggleBtn = document.querySelector('.toggleBtn2');

const overlay = document.querySelector('.sidebar-toggle');

const links = document.querySelectorAll('.sidebar-toggle-links li');

// toggle functionality**** Hamburger
toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (overlay.classList.contains('toggleBtn')) {
    overlay.classList.remove('toggleBtn');
    document.body.classList.add('open-modal-overflow');
  } else {
    overlay.classList.add('toggleBtn');
  }
});

// Close button functionality
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!overlay.classList.contains('toggleBtn')) {
    overlay.classList.add('toggleBtn');
    document.body.classList.remove('open-modal-overflow');
  }
});

// individual links functionality
links.forEach((item) => {
  item.addEventListener('click', () => {
    if (!overlay.classList.contains('toggleBtn')) {
      overlay.classList.add('toggleBtn');
      document.body.classList.remove('open-modal-overflow');
    }
  });
});
