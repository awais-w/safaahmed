// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
  // Toggle mobile menu visibility by adding/removing a class or directly styling
  const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
  mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
  
  if (!isExpanded) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(255, 255, 255, 0.95)';
    navLinks.style.backdropFilter = 'blur(12px)';
    navLinks.style.padding = '2rem';
    navLinks.style.boxShadow = 'var(--shadow-md)';
  } else {
    navLinks.style.display = 'none';
  }
});

// Reset mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'row';
    navLinks.style.position = 'static';
    navLinks.style.padding = '0';
    navLinks.style.background = 'transparent';
    navLinks.style.boxShadow = 'none';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  } else {
    navLinks.style.display = 'none';
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
  observer.observe(element);
});
