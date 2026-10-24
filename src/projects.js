import './style.css';
import './projects.css';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="/" aria-label="Jawed Alam home">JA<span>.</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="/#about">About</a>
      <a href="/#skills">Skills</a>
      <a href="/projects.html">Projects</a>
      <a class="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main class="projects-page section-shell">
    <section class="projects-intro">
      <p class="eyebrow"><span class="status-dot"></span> PROJECTS, WRITING &amp; EXPLORATIONS</p>
      <h1>Things I’ve built<br />and <span>ideas I’ve explored.</span></h1>
      <p class="projects-lede">
        A collection of writing and engineering work. I’ll keep adding to this
        page as new projects and articles take shape.
      </p>
    </section>

    <section class="work-grid" id="writing" aria-label="Selected work">
      <article class="work-card article-card">
        <div class="work-card-topline">
          <span class="work-type">ARTICLE</span>
          <span class="work-number">01</span>
        </div>
        <div class="work-card-content">
          <p class="work-kicker">ALGORITHMS · DEBUGGING</p>
          <h2>Errors in Competitive Coding</h2>
          <p>
            A practical overview of common judging outcomes—from runtime
            errors and time limits to segmentation faults—and what they reveal
            about a solution.
          </p>
          <a class="work-link" href="/article.html">
            Read the full article <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="work-card-mark" aria-hidden="true">&lt;/&gt;</div>
      </article>

      <article class="work-card github-card">
        <div class="work-card-topline">
          <span class="work-type">CODE &amp; PROJECTS</span>
          <span class="work-number">02</span>
        </div>
        <div class="work-card-content">
          <p class="work-kicker">OPEN SOURCE · EXPERIMENTS</p>
          <h2>Explore my GitHub</h2>
          <p>
            Browse my repositories for software projects, experiments, and
            code-related work.
          </p>
          <a
            class="work-link"
            href="https://github.com/zjaweds"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="github-mark" aria-hidden="true">GH</div>
      </article>
    </section>

  </main>

  <footer class="site-footer section-shell">
    <a class="wordmark" href="/" aria-label="Back to home">JA<span>.</span></a>
    <p>Designed &amp; built by Jawed Alam</p>
    <a href="/#home" class="back-to-top">BACK TO TOP ↑</a>
  </footer>
`;
