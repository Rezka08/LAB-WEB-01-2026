import miniVerseImage from '../assets/gallery/miniverseproject.png';
import kawahIjenImage from '../assets/gallery/webkawahijen.png';
import siklusKitaImage from '../assets/gallery/websikluskita.png';
import designImage from '../assets/gallery/grafis1.jpeg';
import logoImage from '../assets/gallery/desainlogo.jpeg';

function Gallery() {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'code', label: 'Code' },
    { id: 'web', label: 'Web' },
    { id: 'design', label: 'Design' },
  ];

  const daftarFoto = [
    {
      id: 1,
      category: 'code',
      categoryLabel: 'CODE / JAVA',
      title: 'MiniVerse',
      description: 'A playful Java project built around mini-games and object-oriented programming.',
      image: miniVerseImage,
      alt: 'Screenshot proyek MiniVerse',
      technologies: ['Java', 'JavaFX', 'OOP'],
      details: 'A Java mini-game project featuring Coin Flip, Tebak Gambar, and Tic-Tac-Toe while applying object-oriented programming concepts.',
      link: 'https://github.com/hartantoporto/MiniVerse',
    },
    {
      id: 2,
      category: 'web',
      categoryLabel: 'WEB / FRONT-END',
      title: 'Kawah Ijen',
      description: 'A visual tourism website focused on hierarchy, atmosphere, and approachable information.',
      image: kawahIjenImage,
      alt: 'Screenshot website wisata Kawah Ijen',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
      details: 'A tourism website concept focused on clear information, visual storytelling, and an inviting user experience for visitors exploring Kawah Ijen.',
      link: '#',
    },
    {
      id: 3,
      category: 'web',
      categoryLabel: 'WEB / FRONT-END',
      title: 'Siklus Kita',
      description: 'A clean web interface built around structured content and a simple user journey.',
      image: siklusKitaImage,
      alt: 'Screenshot website Siklus Kita',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
      details: 'A front-end web project exploring visual hierarchy, content structure, and user-friendly interaction. The screenshot is loaded from the websikluskita.png asset.',
      link: '#',
    },
    {
      id: 4,
      category: 'design',
      categoryLabel: 'DESIGN / VISUAL',
      title: 'Visual Design Collection',
      description: 'Cat illustration, logo exploration, composition, and graphic identity in one visual set.',
      image: designImage,
      secondaryImage: logoImage,
      alt: 'Koleksi ilustrasi grafis dan desain logo',
      technologies: ['Illustration', 'Branding', 'Visual Identity'],
      details: 'A visual-design collection featuring a cat illustration and logo exploration. It highlights composition, illustration, visual identity, and creative direction.',
      link: '#',
    },
  ];

  function filterProjects(filter) {
    document.querySelectorAll('.project-filter').forEach((button) => {
      button.classList.toggle('active', button.dataset.filter === filter);
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });
    document.querySelectorAll('.project-card').forEach((card) => {
      const shouldHide = filter !== 'all' && card.dataset.category !== filter;
      card.classList.toggle('hidden', shouldHide);
    });
    console.log(`Project filter selected: ${filter}`);
  }

  function openProjectModal(foto) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    document.getElementById('modalTitle').textContent = foto.title;
    document.getElementById('modalDescription').textContent = foto.details;
    const techList = document.getElementById('modalTech');
    techList.replaceChildren(...foto.technologies.map((technology) => {
      const tag = document.createElement('span');
      tag.textContent = technology;
      return tag;
    }));
    const modalLink = document.getElementById('modalLink');
    if (foto.link === '#') {
      modalLink.style.display = 'none';
      modalLink.removeAttribute('href');
    } else {
      modalLink.style.display = 'inline-flex';
      modalLink.href = foto.link;
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    console.log(`Project details opened: ${foto.title}`);
  }

  function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  }

  return (
    <>
      <section className="section projects-section" id="projects">
        <div className="container mx-auto">
          <div className="section-heading centered reveal">
            <span className="section-kicker">03 / SELECTED WORK</span>
            <h2>A small collection of things I <em>built &amp; designed.</em></h2>
            <p>Four projects across software, web development, and visual design.</p>
          </div>

          <div className="filters reveal" role="group" aria-label="Filter project berdasarkan kategori">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter project-filter${filter.id === 'all' ? ' active' : ''}`}
                data-filter={filter.id}
                aria-pressed={filter.id === 'all'}
                onClick={() => filterProjects(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {daftarFoto.map((foto) => (
              <article key={foto.id} className="project-card reveal group" data-category={foto.category}>
                {foto.secondaryImage ? (
                  <div className="project-image design-collage">
                    {[foto.image, foto.secondaryImage].map((image, index) => (
                      <div key={`${foto.id}-image-${index}`} className="design-tile">
                        <img src={image} alt={index === 0 ? foto.alt : 'Desain logo Bina Kasih'} loading="lazy" />
                      </div>
                    ))}
                    <span className="project-number">{String(foto.id).padStart(2, '0')}</span>
                  </div>
                ) : (
                  <div className="project-image">
                    <img src={foto.image} alt={foto.alt} loading="lazy" />
                    <span className="project-number">{String(foto.id).padStart(2, '0')}</span>
                  </div>
                )}
                <div className="project-info">
                  <span className="project-type">{foto.categoryLabel}</span>
                  <h3>{foto.title}</h3>
                  <p>{foto.description}</p>
                  <div className="project-footer">
                    <span>{foto.technologies.join(' · ')}</span>
                    <button className="text-btn project-open" type="button" onClick={() => openProjectModal(foto)}>
                      Details ↗
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="modal" id="projectModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-backdrop" type="button" aria-label="Tutup detail proyek" onClick={closeProjectModal} />
        <div className="modal-box">
          <button className="modal-close" id="modalClose" type="button" aria-label="Tutup modal" onClick={closeProjectModal}>×</button>
          <span className="section-kicker">PROJECT DETAILS</span>
          <h2 id="modalTitle">Project title</h2>
          <p id="modalDescription">Project details will appear here.</p>
          <div className="tags" id="modalTech" />
          <a className="btn btn-primary mt-5" id="modalLink" href="#" target="_blank" rel="noreferrer">Open project ↗</a>
        </div>
      </div>
    </>
  );
}

export default Gallery;
