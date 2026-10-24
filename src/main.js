import './style.css';
import aboutImage from '../images/AboutImage.png';

const orbitSkills = [
  { name: '.NET', icon: 'dotnet', cell: 1, path: 'path-a' },
  { name: 'C#', icon: 'csharp', cell: 2, path: 'path-c' },
  { name: 'React', icon: 'react', cell: 3, path: 'path-a' },
  { name: 'JavaScript', icon: 'javascript', cell: 4, path: 'path-b' },
  { name: 'TypeScript', icon: 'typescript', cell: 8, path: 'path-b' },
  { name: 'Angular', icon: 'angular', cell: 12, path: 'path-c' },
  { name: 'Azure', icon: 'azure', cell: 16, path: 'path-b' },
  { name: 'OpenAI', icon: 'openai', cell: 15, path: 'path-a' },
  { name: 'Data structures and algorithms', icon: 'leetcode', cell: 14, path: 'path-a' },
  { name: 'SQL Server', icon: 'sql-server', cell: 13, path: 'path-c' },
  { name: 'GitHub Actions', icon: 'github-actions', cell: 5, path: 'path-a' },
];

const skills = [
  '.NET',
  'C#',
  'React',
  'Angular',
  'JavaScript',
  'TypeScript',
  'Azure',
  'LLMs',
  'Data structures & algorithms',
  'SQL Server',
  'GitHub Actions',
];

const orbitMarkup = orbitSkills
  .map(
    ({ name, icon, cell, path }) => `
      <div class="orbit-cell orbit-cell-${cell}">
        <img
          class="orbit-icon ${path}"
          src="/icons/${icon}.svg"
          alt="${name}"
        />
      </div>
    `,
  )
  .join('');

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Jawed Alam home">JA<span>.</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="/projects.html">Projects</a>
      <a class="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main>
    <section class="hero section-shell" id="home">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> SOFTWARE ENGINEER · UNITEDHEALTH GROUP</p>
        <h1>Thoughtful software.<br /><span>Built for what’s next.</span></h1>
        <p class="hero-description">
          I’m Jawed Alam, a software engineer turning complex problems into
          reliable, human-friendly products across the stack.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="#skills">Explore my skills <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-meta">
          <span>FULL-STACK DEVELOPMENT</span>
          <span class="meta-divider"></span>
          <span>NEW DELHI, INDIA</span>
        </div>
      </div>
      <div class="orbit-stage" aria-label="Technology skills orbiting an illustration">
        <div class="orbit-center">
          <img src="${aboutImage}" alt="Illustration of a developer working at a laptop" />
        </div>
        <div class="orbit-grid">${orbitMarkup}</div>
      </div>
      <a class="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
    </section>

    <section class="about section-shell" id="about">
      <div class="section-heading">
        <p class="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious by nature.<br /><span>Engineer by craft.</span></h2>
      </div>
      <div class="about-copy">
        <p>
          I’m a software engineer at UnitedHealth Group with 4.5 years of experience building and
          improving web applications. I enjoy working across the stack—from
          shaping responsive interfaces to designing dependable backend
          services and cloud solutions.
        </p>
        <p>
          I bring a practical, collaborative mindset to every project, and I’m
          always exploring how emerging technologies like LLMs can solve real
          problems.
        </p>
      </div>
      <div class="experience-card">
        <span class="experience-number">4.5<span>+</span></span>
        <span class="experience-label">YEARS BUILDING<br />SOFTWARE</span>
        <span class="experience-rule"></span>
        <span class="experience-note">Learning, shipping, and getting better every day.</span>
      </div>
    </section>

    <section class="skills-section" id="skills">
      <div class="section-shell">
        <div class="skills-heading">
          <div>
            <p class="eyebrow">MY TOOLKIT</p>
            <h2>Tools for the<br /><span>whole journey.</span></h2>
          </div>
          <p>From a blank canvas to a cloud deployment, these are some of the tools I use to bring ideas to life.</p>
        </div>
        <div class="skill-list">
          ${skills.map((skill, index) => `<span class="skill-chip"><span class="skill-index">${String(index + 1).padStart(2, '0')}</span>${skill}</span>`).join('')}
        </div>
      </div>
    </section>

    <section class="contact section-shell" id="contact">
      <div class="contact-orb" aria-hidden="true"></div>
      <p class="eyebrow">HAVE A GOOD ONE IN MIND?</p>
      <h2>Let’s make<br /><span>something meaningful.</span></h2>
      <p class="contact-description">I’d love to hear about what you’re building. Find me on either platform.</p>
      <div class="contact-links">
        <a class="button button-primary" href="https://www.linkedin.com/in/zjaweds" target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a class="button button-secondary" href="https://github.com/zjaweds" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <a class="wordmark" href="#home" aria-label="Back to top">JA<span>.</span></a>
    <p>Designed &amp; built by Jawed Alam</p>
    <a href="#home" class="back-to-top">BACK TO TOP ↑</a>
  </footer>
`;
