function Skills() {
  const impactTags = ['SDGs', 'Education', 'Environment', 'Community'];

  const softSkills = [
    'Leadership', 'Mentoring', 'Communication', 'Public Speaking', 'Facilitation',
    'Teamwork', 'Adaptability', 'Time Management', 'Problem Solving',
  ];

  const technicalSkills = [
    'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'Microsoft Office',
    'Google Workspace', 'Canva', 'Basic Video Editing', 'Documentation', 'UI Design',
  ];

  const repositories = [
    {
      id: 1,
      name: 'LAB-BASISDATA-2026',
      description: 'Public repository — no description yet.',
      language: 'Code',
      url: 'https://github.com/hartantoporto/LAB-BASISDATA-2026',
      stars: 0,
    },
    {
      id: 2,
      name: 'LAB-WEB-01-2026',
      description: 'Public repository — no description yet.',
      language: 'Code',
      url: 'https://github.com/hartantoporto/LAB-WEB-01-2026',
      stars: 0,
    },
    {
      id: 3,
      name: 'MiniVerse',
      description: 'Aplikasi mini game berbasis JavaFX yang berisi Coin Flip, Tebak Gambar, dan Tic-Tac-Toe.',
      language: 'Java',
      url: 'https://github.com/hartantoporto/MiniVerse',
      stars: 0,
    },
    {
      id: 4,
      name: 'LAB_OOP_11_2026',
      description: 'Public repository — latihan Object-Oriented Programming.',
      language: 'Java',
      url: 'https://github.com/hartantoporto/LAB_OOP_11_2026',
      stars: 0,
    },
    {
      id: 5,
      name: 'maber_AP14',
      description: 'MID project group AP-14.',
      language: 'Python',
      url: 'https://github.com/hartantoporto/maber_AP14',
      stars: 0,
    },
    {
      id: 6,
      name: 'TuPrak-1-AP',
      description: 'Repository for practical assignments.',
      language: 'Code',
      url: 'https://github.com/hartantoporto/TuPrak-1-AP',
      stars: 0,
    },
  ];

  return (
    <>
      <section className="section github-section" id="github">
        <div className="container github-panel reveal mx-auto rounded-[28px] border border-white/10">
          <div className="github-top">
            <div>
              <span className="section-kicker">04 / GITHUB</span>
              <h2>Code that lives <em>in public.</em></h2>
              <p>Public repositories from <strong>@hartantoporto</strong>, showing a little of what I have been learning and building.</p>
            </div>
            <a className="btn btn-ghost transition hover:-translate-y-1" href="https://github.com/hartantoporto" target="_blank" rel="noreferrer">
              Open GitHub ↗
            </a>
          </div>
          <div className="github-grid" id="githubGrid">
            {repositories.map((repository) => (
              <a key={repository.id} className="repo-card group" href={repository.url} target="_blank" rel="noreferrer">
                <div className="repo-icon transition duration-300 group-hover:rotate-12 group-hover:scale-110">⌘</div>
                <h4>{repository.name}</h4>
                <p>{repository.description}</p>
                <div className="repo-meta"><span>{repository.language}</span><span>★ {repository.stars}</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section" id="impact">
        <div className="container impact-card reveal mx-auto overflow-hidden">
          <div className="impact-copy">
            <span className="section-kicker">05 / BEYOND CODE</span>
            <h2>Technology matters more when it <em>helps people.</em></h2>
            <p>My social-impact experiences connect research, communication, mentoring, and technology with issues that matter — from education to environmental awareness.</p>
            <div className="impact-tags">
              {impactTags.map((tag, index) => (
                <span key={index} className="transition hover:-translate-y-1 hover:border-cyan-300/50">{tag}</span>
              ))}
            </div>
          </div>
          <div className="impact-orb" aria-hidden="true">
            <div className="orb-core">IMPACT</div><div className="orb-ring r1" /><div className="orb-ring r2" /><div className="orb-ring r3" />
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container split-layout mx-auto">
          <div className="section-heading reveal">
            <span className="section-kicker">06 / SKILLS</span>
            <h2>Tools, habits &amp; <em>human skills.</em></h2>
            <p className="section-intro">A growing toolkit shaped by class projects, mentoring, teamwork, and creative exploration.</p>
          </div>
          <div className="skills-board reveal reveal-delay">
            <div className="skill-block rounded-2xl transition duration-300 hover:border-violet-300/30" data-tilt>
              <h3>Soft Skills</h3>
              <div className="skill-cloud">
                {softSkills.map((skill, index) => (
                  <span key={index} className="transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:text-violet-100">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-block rounded-2xl transition duration-300 hover:border-cyan-300/30" data-tilt>
              <h3>Technical &amp; Creative</h3>
              <div className="skill-cloud">
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-100">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;