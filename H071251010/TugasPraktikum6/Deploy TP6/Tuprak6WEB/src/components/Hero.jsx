function Hero() {
  const logoLetters = [
    { id: 1, letter: 'T' }, { id: 2, letter: 'A' }, { id: 3, letter: 'N' },
    { id: 4, letter: 'T' }, { id: 5, letter: 'O' },
  ];
  const heroLetters = [
    { id: 1, letter: 'D' }, { id: 2, letter: 'W' }, { id: 3, letter: 'I' },
    { id: 4, space: true },
    { id: 5, letter: 'H' }, { id: 6, letter: 'A' }, { id: 7, letter: 'R' },
    { id: 8, letter: 'T' }, { id: 9, letter: 'A' }, { id: 10, letter: 'N' },
    { id: 11, letter: 'T' }, { id: 12, letter: 'O' },
  ];
  const cubeFaces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
  const introDots = ['d1', 'd2', 'd3', 'd4'];
  const planetCraters = ['c1', 'c2', 'c3'];

  function handleExploreClick() {
    console.log('Terima kasih sudah mengunjungi portofolio Dwi Hartanto!');
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="intro" id="intro" aria-label="Portfolio loading">
        <div className="intro-stars" />
        <div className="intro-grid" />
        <div className="intro-planet-scene" aria-hidden="true">
          <div className="planet-glow" />
          <div className="planet">
            {planetCraters.map((crater) => (
              <span key={crater} className={`planet-crater ${crater}`} />
            ))}
          </div>
          <div className="planet-ring ring-a" />
          <div className="planet-ring ring-b" />
          <div className="intro-cube">{cubeFaces.map((face) => <i key={face} />)}</div>
          {introDots.map((dot) => <span key={dot} className={`intro-dot ${dot}`} />)}
        </div>
        <div className="intro-center">
          <p className="intro-kicker">DIGITAL SPACE / 2026</p>
          <div className="intro-logo" aria-label="TANTO">
            {logoLetters.map((item) => <span key={item.id}>{item.letter}</span>)}
          </div>
          <p className="intro-name">DWI HARTANTO · DIGITAL PORTFOLIO</p>
          <div className="intro-loader"><span /></div>
          <p className="intro-enter">LOADING EXPERIENCE <b>↗</b></p>
        </div>
        <div className="intro-corner intro-left">MAKASSAR / ID</div>
        <div className="intro-corner intro-right">TECH · DESIGN · IMPACT</div>
      </div>

      <section className="hero section relative isolate overflow-hidden bg-slate-950 text-white" id="home">
        <div className="hero-grid" />
        <div className="hero-blob blob-a" />
        <div className="hero-blob blob-b" />
        <div className="container hero-layout relative z-10 mx-auto grid items-center gap-12 px-1">
          <div className="hero-copy reveal hero-stagger" data-entry="copy">
            <div className="eyebrow">
              <span className="pulse" />
              <span id="greeting">HELLO, I&apos;M</span> · INFORMATION SYSTEMS STUDENT
            </div>
            <h1 className="hero-title font-display" aria-label="Dwi Hartanto">
              {heroLetters.map((item) => item.space
                ? <i key={item.id}> </i>
                : <span key={item.id}>{item.letter}</span>)}
            </h1>
            <p className="hero-lead">
              I explore the space between <strong>technology, design, people, and meaningful impact.</strong>
            </p>
            <p className="hero-description">
              Undergraduate student at Hasanuddin University who enjoys learning, mentoring, building digital projects, creating visuals, and working with people.
            </p>
            <div className="hero-actions flex flex-wrap gap-3">
              <button className="btn btn-primary magnetic button-3d" type="button" onClick={handleExploreClick}>
                Explore my work <span>↗</span>
              </button>
              <a className="btn btn-ghost magnetic button-glass" href="#contact">Let&apos;s connect</a>
            </div>
            <div className="hero-meta">
              <span>Hasanuddin University</span><i /><span>Makassar, Indonesia</span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay" data-entry="visual">
            <div className="hero-scene" id="heroScene">
              <div className="scene-back-orbit" />
              <div className="scene-back-orbit two" />
              <div className="scene-glow" />
              <div className="scene-planet"><span /></div>
              <div className="scene-orbit o1" />
              <div className="scene-orbit o2" />
              <div className="scene-orbit o3" />
              <div className="profile-card glass-card" data-tilt>
                <div className="profile-photo-wrap">
                  <img src="/foto-profil.PNG" alt="Foto profil Dwi Hartanto" />
                  <div className="photo-shine" />
                </div>
                <div className="profile-card-bottom">
                  <div><span className="mini-label">CURRENTLY</span><strong>Learning · Building · Growing</strong></div>
                  <span className="status-dot" />
                </div>
              </div>
              <div className="floating-tag tag-top">JAVA · WEB · UI</div>
              <div className="floating-tag tag-bottom">CREATIVE × TECH</div>
              <div className="hero-cube">{cubeFaces.map((face) => <i key={face} />)}</div>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span className="scroll-wheel" /><span>SCROLL TO EXPLORE</span><b>↓</b>
        </a>
      </section>
    </>
  );
}

export default Hero;