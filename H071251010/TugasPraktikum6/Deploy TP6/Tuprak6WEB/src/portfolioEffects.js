function queryAll(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

async function loadGithubRepositories() {
  const grid = document.getElementById('githubGrid');
  if (!grid) return;

  try {
    const response = await fetch('https://api.github.com/users/hartantoporto/repos?sort=updated&direction=desc&per_page=6');
    if (!response.ok) throw new Error('GitHub API unavailable');
    const repositories = await response.json();
    if (!Array.isArray(repositories) || repositories.length === 0) return;

    grid.innerHTML = repositories.map((repository) => `
      <a class="repo-card group" href="${escapeHtml(repository.html_url)}" target="_blank" rel="noopener noreferrer">
        <div class="repo-icon">⌘</div>
        <h4>${escapeHtml(repository.name)}</h4>
        <p>${escapeHtml(repository.description || 'Public repository — no description yet.')}</p>
        <div class="repo-meta">
          <span>${escapeHtml(repository.language || 'Code')}</span>
          <span>★ ${Number(repository.stargazers_count) || 0}</span>
        </div>
      </a>
    `).join('');
  } catch {
    // The curated repositories rendered by React remain visible when offline or rate-limited.
  }
}

export function initializePortfolioEffects() {
  if (window.__dwiPortfolioEffectsInitialized) return;
  window.__dwiPortfolioEffectsInitialized = true;

  document.body.classList.add('page-ready');
  if (localStorage.getItem('portfolioTheme') === 'light') {
    document.body.classList.add('light');
  }

  const intro = document.getElementById('intro');
  window.setTimeout(() => {
    document.body.classList.add('intro-complete');
    intro?.classList.add('hide');
  }, 3000);
  window.setTimeout(() => {
    document.body.classList.add('hero-visible');
  }, 5200);

  const hour = new Date().getHours();
  const greeting = hour < 11 ? 'GOOD MORNING' : hour < 17 ? 'GOOD AFTERNOON' : 'GOOD EVENING';
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) greetingElement.textContent = `${greeting}, I'M`;

  function updateScrollUI() {
    const maximumScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maximumScroll > 0 ? (window.scrollY / maximumScroll) * 100 : 0;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) progressBar.style.width = `${percentage}%`;
    document.getElementById('backTop')?.classList.toggle('show', window.scrollY > 550);
    document.getElementById('siteHeader')?.classList.toggle('scrolled', window.scrollY > 30);
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  const sections = queryAll('main section[id]');
  const navLinks = queryAll('#mainNav a');
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    queryAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    queryAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', (event) => {
    if (glow && !window.matchMedia('(max-width: 800px)').matches) {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }

    const scene = document.getElementById('heroScene');
    if (!scene || window.matchMedia('(max-width: 900px)').matches) return;
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    scene.style.transform = `perspective(1100px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
  }, { passive: true });

  queryAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (window.matchMedia('(max-width: 980px)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  queryAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.classList.add('image-missing');
      const wrapper = image.parentElement;
      if (!wrapper || wrapper.querySelector('.missing-photo')) return;
      const note = document.createElement('span');
      note.className = 'missing-photo';
      note.innerHTML = 'PHOTO<br><small>ADD IMAGE</small>';
      Object.assign(note.style, {
        position: 'absolute', inset: '0', display: 'grid', placeItems: 'center',
        textAlign: 'center', color: '#7d87a3', font: '600 10px Space Grotesk',
        letterSpacing: '.16em', background: 'linear-gradient(135deg,#101321,#080912)',
      });
      wrapper.appendChild(note);
    }, { once: true });
  });

  queryAll('.magnetic').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${(x * 0.08).toFixed(1)}px, ${(y * 0.08).toFixed(1)}px)`;
    });
    button.addEventListener('pointerleave', () => {
      button.style.transform = '';
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const modal = document.getElementById('projectModal');
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  });

  loadGithubRepositories();
}
