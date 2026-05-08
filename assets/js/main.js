// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Form submission via Formspree AJAX
const demoForm = document.getElementById('demo-form');
if (demoForm) {
  demoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:rotate-slow 1s linear infinite"><path d="M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4m-3.93 7.07l-2.83-2.83M7.76 7.76L4.93 4.93"/></svg> Enviando...';
    btn.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function(response) {
      if (response.ok) {
        form.innerHTML = '<div style="text-align:center;padding:2.5rem 1.5rem;"><div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(46,125,50,0.1),rgba(33,150,243,0.1));display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;"><svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2E7D32" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><h3 style="font-size:1.4rem;font-weight:800;color:#1A202C;margin-bottom:0.5rem;">¡Gracias! Te contactaremos pronto</h3><p style="color:#718096;font-size:0.95rem;line-height:1.6;">Nuestro equipo revisará tu solicitud y te responderá en menos de 24 horas.</p></div>';
      } else {
        btn.innerHTML = 'Error — intenta de nuevo';
        btn.disabled = false;
      }
    }).catch(function() {
      btn.innerHTML = 'Error de conexión — intenta de nuevo';
      btn.disabled = false;
    });
  });
}

// Scroll animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.value-card, .feature-card, .testimonial, .step-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.4,0,0.2,1)';
  observer.observe(el);
});
