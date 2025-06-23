
export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with section-fade-in class
  const elementsToObserve = document.querySelectorAll('.section-fade-in');
  elementsToObserve.forEach((el) => observer.observe(el));

  return observer;
};
