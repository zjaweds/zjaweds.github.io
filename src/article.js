import './style.css';
import './article.css';
import runtimeErrorImage from '../pages/images/runtime-error.png';
import tleImage from '../pages/images/tle-error.png';
import sigsegvImage from '../pages/images/sigsegv.png';
import sigabrtImage from '../pages/images/sigabrt.png';
import sigfpeImage from '../pages/images/sigfpe.png';

const illustrations = [
  ['Runtime error', runtimeErrorImage],
  ['Time limit exceeded', tleImage],
  ['Segmentation violation', sigsegvImage],
  ['Abort signal', sigabrtImage],
  ['Floating-point exception', sigfpeImage],
];

const illustration = (alt, src) => `
  <figure class="article-illustration">
    <img src="${src}" alt="${alt}" />
    <figcaption>${alt}</figcaption>
  </figure>
`;

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="/#home" aria-label="Jawed Alam home">JA<span>.</span></a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="/#about">About</a>
      <a href="/#skills">Skills</a>
      <a href="/projects.html">Projects</a>
      <a href="https://zjaweds.github.io/CPRevision">CP Revision</a>
      <a class="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main class="article-page section-shell" id="top">
    <a class="article-back-link" href="/projects.html">← Back to projects &amp; writing</a>
    <article class="article-content">
      <header class="article-heading">
        <p class="eyebrow"><span class="status-dot"></span> ALGORITHMS · DEBUGGING</p>
        <h1>Errors in <span>Competitive Coding</span></h1>
        <p class="article-deck">
          What common judging outcomes mean, why they happen, and where to
          begin when a submission does not behave as expected.
        </p>
        <p class="article-byline">By Jawed Alam</p>
      </header>

      <div class="article-body">
        <p>
          In competitive coding, participants write programs to solve clearly
          defined problems. A solution needs to produce the expected result
          for every test case while respecting the time and memory limits set
          by the platform. Those constraints make efficiency part of the
          challenge, alongside correctness.
        </p>
        <p>
          In addition to compiler errors and wrong answers, an online judge can
          report execution failures or resource-limit outcomes. The exact
          meaning varies between platforms and languages, but understanding
          the common labels helps narrow down what to inspect.
        </p>

        <section class="article-section">
          <h2>Runtime error</h2>
          <p>
            A runtime error means the program failed while it was running.
            Causes can include invalid memory access, division by zero,
            unhandled exceptions, or exhausting the stack. Check the failing
            input and the language-specific diagnostic first. A platform or
            connection issue is possible, but a runtime error usually merits
            investigating the program itself.
          </p>
          ${illustration(...illustrations[0])}
        </section>

        <section class="article-section">
          <h2>TLE: Time Limit Exceeded</h2>
          <p>
            TLE occurs when the solution does not finish within the time
            constraint. Revisit the algorithm and its complexity, then
            consider input size, repeated work, data structures, and
            implementation overhead. An approach that works on small examples
            may still be too slow for the largest test cases.
          </p>
          ${illustration(...illustrations[1])}
        </section>

        <section class="article-section">
          <h2>SIGSEGV: Segmentation Violation</h2>
          <p>
            SIGSEGV is an operating-system signal commonly associated with an
            invalid memory access. Typical causes include:
          </p>
          <ul>
            <li>Using an uninitialized or invalid pointer.</li>
            <li>Dereferencing a null pointer.</li>
            <li>Accessing an array outside its valid index range.</li>
            <li>Exhausting the stack through non-terminating recursion.</li>
            <li>Attempting to modify memory that should not be modified.</li>
          </ul>
          <pre><code>void rec_func() {
    int value = 5;
    rec_func(); // No terminating condition: recursion keeps growing.
}

int main() {
    rec_func();
}</code></pre>
          <p>
            This function calls itself without a stopping condition. The calls
            continue to consume stack space until the process can no longer
            continue. Adding a correct base case prevents unbounded recursion.
          </p>
          ${illustration(...illustrations[2])}
        </section>

        <section class="article-section">
          <h2>SIGABRT: Abort signal</h2>
          <p>
            SIGABRT indicates that a process was aborted. A program or runtime
            may raise it after detecting a fatal condition, such as a failed
            assertion or an unrecoverable library error. The signal alone
            does not identify the root cause, so inspect the diagnostic output
            and the code path that led to the abort.
          </p>
          <pre><code>// A value outside the range of a typical 32-bit signed int:
int value = 100000000000;</code></pre>
          <p>
            In C++, assigning an out-of-range integer literal to an
            <code>int</code> is not a reliable way to represent that value.
            Choose an appropriate type and check its range; the exact behavior
            depends on the expression and implementation.
          </p>
          ${illustration(...illustrations[3])}
        </section>

        <section class="article-section">
          <h2>SIGFPE: Floating-point exception</h2>
          <p>
            SIGFPE is a signal for an arithmetic exception. Despite its name,
            it can also be raised by integer arithmetic, such as integer
            division by zero. Check divisors, modulo operations, and
            arithmetic bounds.
          </p>
          <pre><code>int value = 5;
int result = value / 0; // Division by zero is invalid.</code></pre>
          <p>
            Integer overflow is another important issue to guard against.
            In C++, signed integer overflow is undefined behavior; using a
            wider type does not remove the need to verify that a result fits.
          </p>
          <pre><code>int x = 10;
int y = static_cast&lt;int&gt;(std::pow(x, 11));</code></pre>
          <p>
            The mathematical result is 10,000,000,000, which is outside the
            range of a typical 32-bit <code>int</code>. Use an appropriate
            representation and validate the result before converting.
          </p>
          ${illustration(...illustrations[4])}
        </section>

        <section class="article-section">
          <h2>NZEC: Non-Zero Exit Code</h2>
          <p>
            NZEC means the program ended with a non-zero exit status. The
            label is broad: it can result from an uncaught exception, an
            explicit error exit, a crash, or language- and platform-specific
            behavior. In C, returning zero from <code>main</code> conventionally
            indicates success; other languages and judge environments may
            report termination differently.
          </p>
          <p>Investigate the reported exception or failure, including cases such as:</p>
          <ul>
            <li>Unbounded recursion or stack exhaustion.</li>
            <li>Negative or out-of-range array indices.</li>
            <li><code>ArrayIndexOutOfBoundsException</code>.</li>
            <li><code>StringIndexOutOfBoundsException</code>.</li>
          </ul>
          <p>
            Unlike a specific signal, NZEC describes the process exit status
            rather than one universal bug. Use the language runtime's output
            and the judge's details to find the underlying failure.
          </p>
        </section>

        <section class="article-section article-references">
          <h2>Author &amp; references</h2>
          <p>
            Written by <a href="https://github.com/zjaweds" target="_blank" rel="noreferrer">Jawed Alam</a>.
          </p>
          <ul>
            <li><a href="https://www.geeksforgeeks.org/program-error-signals/" target="_blank" rel="noreferrer">GeeksforGeeks: Program Error Signals</a></li>
            <li><a href="https://www.gnu.org/software/libc/manual/html_node/Program-Error-Signals.html" target="_blank" rel="noreferrer">GNU C Library: Program Error Signals</a></li>
            <li><a href="https://www.geeksforgeeks.org/runtime-errors/" target="_blank" rel="noreferrer">GeeksforGeeks: Runtime Errors</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Segmentation_fault" target="_blank" rel="noreferrer">Wikipedia: Segmentation Fault</a></li>
          </ul>
        </section>
      </div>
    </article>
  </main>

  <footer class="site-footer section-shell">
    <a class="wordmark" href="/#home" aria-label="Back to home">JA<span>.</span></a>
    <p>Designed &amp; built by Jawed Alam</p>
    <a href="#top" class="back-to-top">BACK TO TOP ↑</a>
  </footer>
`;
