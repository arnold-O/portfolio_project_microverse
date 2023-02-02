const closeBtn = document.querySelector('.sidebar-close-btn');

const toggleBtn = document.querySelector('.toggleBtn2');

const overlay = document.querySelector('.sidebar-toggle');

const links = document.querySelectorAll('.sidebar-toggle-links li');

// toggle functionality**** Hamburger
toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (overlay.classList.contains('toggleBtn')) {
    overlay.classList.remove('toggleBtn');
  } else {
    overlay.classList.add('toggleBtn');
  }
});

// Close button functionality
closeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!overlay.classList.contains('toggleBtn')) {
    overlay.classList.add('toggleBtn');
  }
});

// individual links functionality
links.forEach((item) => {
  item.addEventListener('click', function () {
    if (!overlay.classList.contains('toggleBtn')) {
      overlay.classList.add('toggleBtn');
    }
  });
});
