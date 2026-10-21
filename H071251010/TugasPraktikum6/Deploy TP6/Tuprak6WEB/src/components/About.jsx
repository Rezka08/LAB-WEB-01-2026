import academicMentorImage from '../assets/gallery/academic-mentor.jpeg';
import binaKasihImage from '../assets/gallery/binakasih.jpeg';
import novoImage from '../assets/gallery/novo.jpeg';
import balanceImage from '../assets/gallery/mentor-balance.jpeg';
import aiesecImage from '../assets/gallery/aiesec.jpeg';

function About() {
  const dataDiri = [
    { id: 1, label: 'PROGRAM', value: 'Information Systems' },
    { id: 2, label: 'UNIVERSITY', value: 'Hasanuddin University' },
    { id: 3, label: 'LOCATION', value: 'Makassar, Indonesia' },
    { id: 4, label: 'INTERESTS', value: 'Technology · Design · Social Impact' },
  ];

  const traits = ['Curious', 'People-oriented', 'Always learning'];

  const stats = [
    { id: 1, value: '3.83', label: 'GPA / 4.00' },
    { id: 2, value: '39+', label: 'Mentees supported' },
    { id: 3, value: '2025', label: 'University journey' },
  ];

  const spotifyTracks = [
    { id: '5p0ietGkLNEqx1Z7ijkw5g', label: 'Favorite Track 01' },
    { id: '5DqSZFvWvSWg5eyCDi0CuW', label: 'Favorite Track 02' },
    { id: '5XQavlXrNHBBvlN4IJqhqW', label: 'Favorite Track 03' },
    { id: '5EHMPGhsQY5o1pcjOejbMj', label: 'Favorite Track 04' },
    { id: '2ETS40F2jiUhQJHhFlZ1dW', label: 'Favorite Track 05' },
    { id: '7zOVh5fGpEwSbZd0g9z80B', label: 'Favorite Track 06' },
    { id: '2hHeGD57S0BcopfVcmehdl', label: 'Favorite Track 07' },
    { id: '7F4tV8SiUy6itZTdAzdafO', label: 'Favorite Track 08' },
  ];

  const experiences = [
    {
      id: 1,
      image: academicMentorImage,
      imageAlt: 'Dokumentasi Academic Mentor SNBT',
      date: 'JAN — APR 2026',
      category: 'VOLUNTEERING',
      title: 'Academic Mentor SNBT',
      organization: 'Platform Tumbuh Berbagi',
      points: [
        'Mentored high school students preparing for UTBK-SNBT Penalaran Umum through online learning sessions.',
        'Facilitated logical reasoning, analytical thinking, structured problem-solving, and study planning.',
        'Guided students on time management and effective test-taking approaches.',
      ],
      tags: ['Mentoring', 'Facilitation', 'Communication'],
    },
    {
      id: 2,
      image: binaKasihImage,
      imageAlt: 'Dokumentasi Bina Kasih GMKI',
      date: '2026',
      category: 'ORGANIZATION',
      title: 'Publication & Documentation Committee',
      organization: 'Bina Kasih GMKI Komisariat FMIPA Universitas Hasanuddin',
      points: [
        'Designed promotional materials and visual content for events.',
        'Collaborated with committee members on publication strategy and documentation needs.',
        'Prepared event documentation and visual assets for organizational media.',
      ],
      tags: ['Design', 'Documentation', 'Teamwork'],
    },
    {
      id: 3,
      image: novoImage,
      imageAlt: 'Dokumentasi Novo Club',
      date: '2026',
      category: 'SOCIAL IMPACT',
      title: 'Research Division Member',
      organization: 'Novo Club — Novo Social Impact Program',
      points: [
        'Researched social and environmental issues to support project development and educational content.',
        'Developed materials on SDGs and environmental awareness, then delivered a session as a speaker.',
        'Collaborated across research, preparation, and implementation stages.',
      ],
      tags: ['Research', 'SDGs', 'Environment'],
    },
    {
      id: 4,
      image: balanceImage,
      imageAlt: 'Dokumentasi BALANCE Mentor',
      date: '2026',
      category: 'MENTORING',
      title: 'BALANCE Mentor',
      organization: 'BALANCE Universitas Hasanuddin',
      points: [
        'Mentored and supported 39+ mentees throughout a four-week program.',
        'Assisted instructors in preparing learning materials and activities from preparation through implementation.',
        'Facilitated discussions and interactive activities to encourage participation and engagement.',
      ],
      tags: ['Leadership', 'Mentoring', 'Teamwork'],
    },
    {
      id: 5,
      image: aiesecImage,
      imageAlt: 'Dokumentasi AIESEC Future Leaders Winter Peak',
      date: '2025',
      category: 'LEADERSHIP',
      title: 'AIESEC Future Leaders — Winter Peak',
      organization: 'AIESEC Makassar',
      points: [
        'Selected for a 10-week leadership development program focused on personal growth, teamwork, and leadership.',
        'Collaborated with fellow participants and a coach to develop and present a social impact project.',
        'Strengthened communication, public speaking, and problem-solving through discussions and team activities.',
      ],
      tags: ['Leadership', 'Collaboration', 'Social Impact'],
    },
  ];

  return (
    <>
      <section className="section about-section bg-slate-950/40" id="about">
        <div className="container about-layout mx-auto">
          <div className="section-heading reveal">
            <span className="section-kicker">01 / ABOUT</span>
            <h2>Curious by nature.<br /><em>Intentional by choice.</em></h2>
            <p className="section-intro">A little context behind the person, the projects, and the things that keep me moving.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {traits.map((trait, index) => (
                <span key={index} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-100">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="about-main reveal reveal-delay">
            <p className="about-lead">
              I am an Undergraduate Student in <strong>Information Systems at Hasanuddin University</strong>, interested in technology, communication, mentoring, design, and social impact.
            </p>
            <p>
              My experiences have taken me from mentoring students and facilitating teams to researching social issues, creating visual content, and building software projects. I like learning by doing and turning ideas into something people can actually experience.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dataDiri.map((item) => (
                <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-400/[0.06]">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-100">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="stats mt-7">
              {stats.map((item) => (
                <div key={item.id} className="transition duration-300 hover:-translate-y-1">
                  <b>{item.value}</b><span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="soundtrack glass-card mt-8" data-tilt>
              <div className="soundtrack-copy">
                <span className="section-kicker">MY FAVORITE SONGS</span>
                <h3>A little soundtrack for study, deadlines &amp; sleep.</h3>
                <p>Some songs I keep around while coding, doing assignments, commuting, or winding down at night.</p>
                <div className="music-note">
                  <span className="equalizer"><i /><i /><i /><i /></span>
                  8 selected tracks · <a href="https://open.spotify.com/" target="_blank" rel="noreferrer"><strong>more on my playlist ↗</strong></a>
                </div>
              </div>
              <div className="vinyl" aria-hidden="true"><span>♫</span></div>
              <div className="spotify-mini-grid" id="spotifyGrid">
                {spotifyTracks.map((track) => (
                  <article key={track.id} className="spotify-card">
                    <iframe
                      title={`Spotify ${track.label}`}
                      src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    />
                    <a className="track-link" href={`https://open.spotify.com/track/${track.id}`} target="_blank" rel="noreferrer">
                      {track.label} · open on Spotify ↗
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container mx-auto">
          <div className="section-heading centered reveal">
            <span className="section-kicker">02 / EXPERIENCE</span>
            <h2>People, projects &amp; <em>places that shaped me.</em></h2>
            <p>Five experiences across mentoring, organization, research, and leadership.</p>
          </div>
          <div className="experience-grid">
            {experiences.map((experience) => (
              <article key={experience.id} className="experience-card reveal group" data-tilt>
                <div className="exp-photo overflow-hidden">
                  <img src={experience.image} alt={experience.imageAlt} loading="lazy" />
                  <span>PHOTO {String(experience.id).padStart(2, '0')}</span>
                </div>
                <div className="exp-content">
                  <div className="exp-top"><span>{experience.date}</span><span>{experience.category}</span></div>
                  <h3>{experience.title}</h3>
                  <p className="org">{experience.organization}</p>
                  <ul>
                    {experience.points.map((point, index) => (
                      <li key={`${experience.id}-${index}`}>{point}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {experience.tags.map((tag, index) => (
                      <span key={`${experience.id}-tag-${index}`} className="transition hover:border-cyan-300/50 hover:text-cyan-200">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;