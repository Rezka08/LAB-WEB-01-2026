function Footer() {
  const socialLinks = [
    { id: 1, label: 'Instagram', url: 'https://www.instagram.com/dhartanto_/' },
    { id: 2, label: 'LinkedIn', url: 'https://linkedin.com/in/hartantodanunan' },
    { id: 3, label: 'GitHub', url: 'https://github.com/hartantoporto' },
  ];

  function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');
    const nameError = form.querySelector('#nameError');
    const emailError = form.querySelector('#emailError');
    const messageError = form.querySelector('#messageError');
    const status = form.querySelector('#formStatus');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    status.textContent = 'Contact form uses localStorage for this assignment.';

    let isValid = true;
    if (name.value.trim().length < 2) {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailError.textContent = 'Please enter a valid email.';
      isValid = false;
    }
    if (message.value.trim().length < 10) {
      messageError.textContent = 'Please write at least 10 characters.';
      isValid = false;
    }
    if (!isValid) {
      status.textContent = 'Please check the highlighted fields.';
      return;
    }

    const contactData = {
      name: name.value.trim(),
      email: email.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim(),
      date: new Date().toISOString(),
    };

    try {
      const previousEntries = JSON.parse(localStorage.getItem('portfolioContacts') || '[]');
      previousEntries.push(contactData);
      localStorage.setItem('portfolioContacts', JSON.stringify(previousEntries));
      status.textContent = 'Message saved locally ✓';
      console.log('Contact message saved locally.');
      form.reset();
      const toast = document.getElementById('toast');
      toast?.classList.add('show');
      window.setTimeout(() => toast?.classList.remove('show'), 2400);
    } catch {
      status.textContent = 'Could not save the message in this browser.';
    }
  }

  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="container contact-layout mx-auto">
          <div className="contact-copy reveal">
            <span className="section-kicker">07 / CONTACT</span>
            <h2>Have an idea?<br /><em>Let&apos;s talk.</em></h2>
            <p>For collaboration, projects, mentoring, or just a good conversation — send a message.</p>
            <div className="socials">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} <span>↗</span>
                </a>
              ))}
            </div>
            <small className="social-note">Let’s connect beyond the screen.</small>
            <p className="mt-8 text-xs text-slate-500">The form below stores this practice message only in this browser; it does not send an email.</p>
          </div>

          <form className="contact-form glass-card reveal reveal-delay" id="contactForm" noValidate onSubmit={handleContactSubmit}>
            <label htmlFor="name">Name
              <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" />
              <small id="nameError" />
            </label>
            <label htmlFor="email">Email
              <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
              <small id="emailError" />
            </label>
            <label htmlFor="subject">Subject
              <input id="subject" name="subject" type="text" placeholder="What’s this about?" />
            </label>
            <label htmlFor="message">Message
              <textarea id="message" name="message" rows="5" placeholder="Tell me a little about it..." />
              <small id="messageError" />
            </label>
            <button className="btn btn-primary button-3d" type="submit">Save message <span>↗</span></button>
            <p className="form-status" id="formStatus">Contact form uses localStorage for this assignment.</p>
          </form>
        </div>
      </section>

      <footer className="footer px-5">
        <div className="container footer-inner mx-auto">
          <span>© 2026 Dwi Hartanto. All rights reserved.</span>
          <span>Built with curiosity &amp; caffeine.</span>
          <a href="#home" className="transition hover:text-cyan-200">Back to top ↑</a>
        </div>
      </footer>

      <button
        className="back-top transition hover:-translate-y-1 hover:border-cyan-300/50"
        id="backTop"
        type="button"
        aria-label="Kembali ke bagian atas"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
      <div className="toast" id="toast" role="status" aria-live="polite">Message saved locally ✓</div>
    </>
  );
}

export default Footer;