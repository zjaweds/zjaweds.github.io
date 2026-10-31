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
  {
    category: 'Frontend',
    items: ['React', 'Angular', 'JavaScript', 'TypeScript', 'CSS', 'Styled Components', 'React Native'],
  },
  {
    category: 'Backend',
    items: ['C#', '.NET', 'Python', 'Django', 'CQRS', 'REST APIs'],
  },
  {
    category: 'Database',
    items: ['SQL Server', 'PostgreSQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'Terraform', 'CloudFormation', 'Consul', 'GitHub Actions', 'Docker', 'Linux', 'PowerShell'],
  },
  {
    category: 'Engineering practices',
    items: ['LLD', 'HLD', 'Data structures & algorithms', 'Git', 'Agile', 'TDD', 'CI/CD', 'LLMs', 'Generative AI'],
  },
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
        <h1>I build thoughtful software<br /><span>for what’s next.</span></h1>
        <p class="hero-description">
          I’m Jawed Alam, a software engineer with 4+ years of experience
          building scalable applications, cloud-native solutions, and AI-driven
          tools across the stack.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="/Jawed-Alam-Resume.pdf" download="Jawed-Alam-Resume.pdf">
            Download Resume <span aria-hidden="true">↓</span>
          </a>
          <a class="text-link" href="https://zjaweds.github.io/CPRevision">CP Revision <span aria-hidden="true">↗</span></a>
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
          I’m a software engineer at UnitedHealth Group with 4+ years of
          experience delivering enterprise applications. My work spans
          frontend development, CQRS-based APIs, cloud migrations, CI/CD, and
          data-driven solutions.
        </p>
        <p>
          I’ve led modernization and automation efforts, mentored teammates,
          and built generative-AI solutions including a Claim Approval Agent.
          I enjoy turning complex requirements into reliable products and
          continually improving how teams build and deliver software.
        </p>
      </div>
      <div class="experience-card">
        <span class="experience-number">4<span>+</span></span>
        <span class="experience-label">YEARS BUILDING<br />SOFTWARE</span>
        <span class="experience-rule"></span>
        <span class="experience-note">Enterprise software, cloud, and AI solutions.</span>
      </div>
    </section>

    <section class="career-section section-shell" id="experience">
      <div class="section-heading career-heading">
        <p class="eyebrow">WHERE I’VE MADE AN IMPACT</p>
        <h2>Experience that<br /><span>moves work forward.</span></h2>
      </div>
      <div class="career-list">
        <article class="career-item">
          <div class="career-meta">
            <p class="career-role">Software Engineer</p>
            <p class="career-date">SEP 2022 — PRESENT</p>
          </div>
          <div class="career-details">
            <h3>UnitedHealth Group</h3>
            <ul>
              <li>Built 15+ application pages and 10+ forms for transaction management driven by BAI files and complex business rules.</li>
              <li>Designed four SSO login modules and 15+ secure RESTful CRUD APIs using CQRS.</li>
              <li>Led migration of four legacy Windows applications to Azure web apps, and optimized SQL Server procedures processing 10K+ data points to improve query performance by 15%.</li>
              <li>Automated migration of 400+ Azure DevOps repositories to GitHub and helped lead GitHub Actions CI/CD adoption, reducing deployment time by 40%.</li>
              <li>Developed a Generative AI Claim Approval Agent and a search recommendation system; also automated UI testing to save 70% of testing time.</li>
              <li>Provisioned cloud resources with Terraform, improved observability, and mentored developers on engineering practices.</li>
            </ul>
          </div>
        </article>
        <article class="career-item">
          <div class="career-meta">
            <p class="career-role">Software Engineer</p>
            <p class="career-date">FEB 2022 — SEP 2022</p>
          </div>
          <div class="career-details">
            <h3>Es Magico Experiences</h3>
            <ul>
              <li>Built features for a fractional real-estate acquisition application, improving onboarding time by 30%.</li>
              <li>Developed secure APIs for a hybrid payment application serving 100K+ teenagers, supporting 99.9% uptime and $1M+ in monthly transactions.</li>
              <li>Designed and developed 20+ React Native screens for a fintech app, improving mobile engagement by 25%.</li>
            </ul>
          </div>
        </article>
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
        <div class="skill-groups">
          ${skills.map(({ category, items }) => `
            <div class="skill-group">
              <h3>${category}</h3>
              <div class="skill-list">
                ${items.map((skill, index) => `<span class="skill-chip"><span class="skill-index">${String(index + 1).padStart(2, '0')}</span>${skill}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="credentials-section section-shell">
      <div class="credentials-column">
        <p class="eyebrow">EDUCATION</p>
        <h2>Learning that<br /><span>built the foundation.</span></h2>
        <ul class="credential-list">
          <li>
            <strong>Master of Computer Applications</strong>
            <span>Jamia Millia Islamia · 2019–2022 · 8.85 CGPA</span>
          </li>
          <li>
            <strong>Post Graduate Diploma in Computer Applications</strong>
            <span>Jamia Millia Islamia · 2018–2019 · 8.56 CGPA</span>
          </li>
        </ul>
      </div>
      <div class="credentials-column">
        <p class="eyebrow">CERTIFICATIONS &amp; ACHIEVEMENTS</p>
        <h2>Always learning.<br /><span>Always solving.</span></h2>
        <ul class="credential-list">
          <li><strong>Microsoft Azure Fundamentals</strong><span>AZ-900</span></li>
          <li><strong>AI/ML for Engineers · AWS Skill Xcelerator</strong><span>Professional learning</span></li>
          <li><strong>SQL for Data Science · Machine Learning</strong><span>Coursera</span></li>
          <li><strong>AI Dojo</strong><span>Generative AI ReAct Agent</span></li>
          <li><strong>Competitive programming</strong><span>150+ LeetCode and 200+ GeeksforGeeks problems solved</span></li>
        </ul>
      </div>
    </section>

    <section class="contact section-shell" id="contact">
      <div class="contact-orb" aria-hidden="true"></div>
      <p class="eyebrow">HAVE A GOOD ONE IN MIND?</p>
      <h2>Let’s make<br /><span>something meaningful.</span></h2>
      <p class="contact-description">I’d love to hear about what you’re building. Find me on either platform.</p>
      <div class="contact-links">
        <a class="button button-secondary" href="mailto:zjaweds@gmail.com">
          Email <span aria-hidden="true">↗</span>
        </a>
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
