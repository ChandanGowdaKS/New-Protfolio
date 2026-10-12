import React, { useState, useEffect, useRef } from "react";
const portrait = `${import.meta.env.BASE_URL}images/portrait.jpg`;
import "./style.css";
const resume = `${import.meta.env.BASE_URL}documents/Chandan-Gowda-Resume.pdf`;
const deltaCertificate = `${import.meta.env.BASE_URL}documents/Delta-Full-Stack-Certificate.pdf`;
const jump = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
const projects = [
  {
    id: "01",
    kind: "web",
    label: "Full-stack / AI",
    title: "Interview Experience Portal",
    intro: "Real interviews. Better preparation.",
    desc: "A platform to share and explore interview experiences, with search, filtering, sorting and pagination. Gemini turns experiences into summaries, key topics, questions and preparation guidance.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    features: [
      "JWT authentication, password hashing and protected routes",
      "Role-based authorisation for managing experiences",
      "AI-assisted interview preparation",
    ],
    code: "https://github.com/ChandanGowdaKS/AI-Powered-Interview-Experience-Portal",
    live: "https://ai-powered-interview-experience-por.vercel.app/",
  },
  {
    id: "02",
    kind: "web",
    label: "Full-stack / Rentals",
    title: "PG Finder",
    intro: "Making rental discovery simpler.",
    desc: "A full-stack rental platform built with authentication, REST API integration and database management. Express powers the backend, EJS renders the pages and MongoDB stores the data.",
    stack: ["Node.js", "Express", "MongoDB", "EJS"],
    features: [
      "Authentication and database management",
      "Server-rendered pages with EJS",
      "MongoDB schema design and CRUD operations",
    ],
    live: "https://pg-finder-15fd.onrender.com/listings/",
  },
  {
    id: "03",
    kind: "research",
    label: "Research / Best Paper Award",
    title: "Smart Attendance System",
    intro: "Face recognition for attendance.",
    desc: "Smart Attendance System Using PCA-Based Face Recognition and Hybrid Machine Learning Classifiers. Presented at ICECIT 2025 at Siddaganga Institute of Technology, Tumakuru, and received the Best Paper Award.",
    stack: ["PCA", "Face recognition", "Machine learning"],
    features: [
      "PCA-based face recognition",
      "Hybrid machine learning classifiers",
      "Presented at ICECIT 2025",
    ],
  },
];
function ProjectArt({ id }: { id: string }) {
  return (
    <div
      className={"project-visual visual-" + id}
      aria-label="Illustrative project concept, not a product screenshot"
    >
      <span className="concept-label">CONCEPT / {id}</span>
      {id === "01" ? (
        <div className="mock-terminal">
          <div className="terminal-top">
            <i />
            <i />
            <i />
            <span>experience → insight</span>
          </div>
          <div className="terminal-body">
            <span className="terminal-label">INTERVIEW EXPERIENCE</span>
            <div className="fake-line wide" />
            <div className="fake-line" />
            <div className="fake-line short" />
            <div className="ai-output">
              <span>✧</span>
              <div>
                <b>Gemini insights</b>
                <small>Summaries. Topics. Preparation.</small>
              </div>
              <i className="pulse-dot" />
            </div>
          </div>
        </div>
      ) : id === "02" ? (
        <div className="rental-scene">
          <div className="map-grid" />
          <div className="pin pin-one">⌂</div>
          <div className="pin pin-two">⌂</div>
          <div className="rental-card">
            <span>⌂</span>
            <div>
              <b>Find your next place.</b>
              <small>Browse. Discover. Decide.</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="scanner">
          <div className="scan-face">◎</div>
          <div className="scanner-line" />
          <span className="scan-label">PCA + MACHINE LEARNING</span>
          <span className="award-label">★ BEST PAPER / ICECIT 2025</span>
        </div>
      )}
    </div>
  );
}
function Typing({ paused }: { paused: boolean }) {
  const words = ["Full-stack Developer", "Java Programmer", "Chess Player"];
  const [text, setText] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(true);
  useEffect(() => {
    if (paused) {
      setText(words[0]);
      return;
    }
    const word = words[index];
    const timer = setTimeout(
      () => {
        if (back) {
          if (text.length) setText(text.slice(0, -1));
          else {
            setIndex((index + 1) % words.length);
            setBack(false);
          }
        } else {
          if (text.length < word.length)
            setText(word.slice(0, text.length + 1));
          else setBack(true);
        }
      },
      text === word ? 1700 : text === "" ? 350 : back ? 45 : 85,
    );
    return () => clearTimeout(timer);
  }, [text, index, back, paused]);
  return (
    <span className="typed">
      {text}
      <i aria-hidden="true">|</i>
    </span>
  );
}
export function App() {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("Frontend");
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("shown");
            if (e.target.id) setActive(e.target.id);
          }
        }),
      { threshold: 0.13 },
    );
    root.current
      ?.querySelectorAll(".reveal,section[id]")
      .forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, []);
  const nav = (id: string) => {
    jump(id);
    setMenu(false);
    setActive(id);
  };
  const kits: Record<string, string[]> = {
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    Foundations: ["Java", "DSA", "OOP", "DBMS"],
    Tools: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  };
  return (
    <>
      <div
        ref={root}
        className={"portfolio-v3 " + (paused ? "motion-paused" : "")}
      >
        <header className="nav">
          <button className="logo" onClick={() => nav("home")}>
            Chandan<span>.</span>
          </button>
          <button
            className="mobile-menu"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? "✕" : "☰"}
          </button>
          <div className={"nav-links " + (menu ? "open" : "")}>
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <button
                className={active === id ? "active" : ""}
                key={id}
                onClick={() => nav(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <button
            className="pause"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "▶" : "Ⅱ"}
            <span>{paused ? " Motion" : " Pause"}</span>
          </button>
        </header>
        <section className="home" id="home">
          <div className="home-copy">
            <p className="hello">Hello, I'm</p>
            <h1>
              Chandan
              <br />
              Gowda <span>K S</span>
            </h1>
            <h2>
              And I'm a<br className="mobile-break" />{" "}
              <Typing paused={paused} />
            </h2>
            <p className="intro">
              Information Science student at BMS College of Engineering. I build
              web applications with Java and the MERN stack. Off screen, I'm a
              FIDE-rated chess player and arbiter.
            </p>
            <div className="socials">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ChandanGowdaKS"
              >
                GitHub
              </a>
              <button
                onClick={() => nav("projects")}
                aria-label="Explore my code"
              >
                &lt;/&gt;
              </button>
              <button
                onClick={() => nav("about")}
                aria-label="Read about my chess journey"
              >
                ♞
              </button>
            </div>
            <div className="hero-actions">
              <button className="btn" onClick={() => nav("projects")}>
                View my projects ↗
              </button>
              <button className="btn-outline" onClick={() => nav("about")}>
                More about me
              </button>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-ring">
              <div className="portrait-inner">
                <img src={portrait} alt="Chandan Gowda K S" />
              </div>
            </div>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <div className="portrait-tag">
              <span className="status-dot" /> Java · React · MERN
            </div>
          </div>
          <button className="scroll-down" onClick={() => nav("about")}>
            Scroll to explore <span>↓</span>
          </button>
        </section>
        <section id="about" className="section about">
          <div className="about-photo reveal">
            <div className="small-ring">
              <img src={portrait} alt="Chandan in a navy suit" />
            </div>
            <span className="chess-badge">
              ♞ <b>100+ tournaments officiated</b>
            </span>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
            <h2>
              About <span>Me</span>
            </h2>
            <h3>Developer. Student. Chess player.</h3>
            <p>
              I'm studying Information Science and Engineering at BMS College of
              Engineering, with expected graduation in 2027. My diploma in
              Electronics and Communication gave me a hands-on start with
              circuits and hardware.
            </p>
            <p>
              I enjoy building useful applications, working through programming
              problems, and learning how things work. Chess has taught me to
              think ahead and make careful decisions under pressure.
            </p>
            <div className="about-facts">
              <div>
                <b>2027</b>
                <span>Expected B.E. graduation</span>
              </div>
              <div>
                <b>FIDE-rated</b>
                <span>Standard & Blitz</span>
              </div>
            </div>
            <details>
              <summary>
                My education & experience <span>+</span>
              </summary>
              <ul>
                <li>
                  BMS College of Engineering: B.E. Information Science, 2024 -
                  2027
                </li>
                <li>
                  Govt. Polytechnic, Channapatna: Diploma in Electronics &
                  Communication, 2023
                </li>
                <li>
                  Nandi Powertronics: Production & Testing Intern, Feb - May
                  2023. PCB assembly, testing, design validation and basic fault
                  diagnosis.
                </li>
                <li>
                  Senior National Arbiter & FIDE Arbiter. Participated twice in
                  SGFI State-Level Chess Championships.
                </li>
                <li>
                  Impact AI 2.0 and Tech Tank 2025 national-level hackathons.
                  Organizer and volunteer at BMS Utsav.
                </li>
              </ul>
            </details>
            <div className="document-links">
              <a className="btn-outline" href={resume} download="Chandan-Gowda-Resume.pdf">Download resume ↓</a>
              <a className="certificate-link" href={deltaCertificate} target="_blank" rel="noopener noreferrer">Delta Full Stack certificate ↗</a>
            </div>
          </div>
        </section>
        <section id="skills" className="section skills">
          <p className="eyebrow center reveal">MY DEVELOPMENT TOOLKIT</p>
          <h2 className="center reveal">
            My <span>Skills</span>
          </h2>
          <p className="section-intro center">
            The tools I use to turn an idea into a working application.
          </p>
          <div className="skill-tabs">
            {Object.keys(kits).map((k) => (
              <button
                key={k}
                className={tab === k ? "selected" : ""}
                aria-pressed={tab === k}
                onClick={() => setTab(k)}
              >
                {k}
              </button>
            ))}
          </div>
          <div className="skill-cards" key={tab}>
            {kits[tab].map((k, i) => (
              <div
                className="skill-card"
                key={k}
                style={{ animationDelay: i * 0.07 + "s" }}
              >
                <span className="skill-icon">
                  {k === "React"
                    ? "⚛"
                    : k === "Java"
                      ? "☕"
                      : k === "MongoDB"
                        ? "◈"
                        : k === "GitHub"
                          ? "⌘"
                          : "{ }"}
                </span>
                <h3>{k}</h3>
                <span className="skill-type">{tab}</span>
              </div>
            ))}
          </div>
          <div className="strengths reveal">
            <article>
              <span>01</span>
              <h3>Full-stack applications</h3>
              <p>
                Interfaces, authentication, REST APIs and databases connected
                into working projects.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Programming foundations</h3>
              <p>
                Java, data structures, object-oriented programming and database
                concepts.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Research & problem solving</h3>
              <p>
                Face recognition research, hackathons, and careful thinking
                learned through chess.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="section projects">
          <p className="eyebrow center reveal">SELECTED WORK</p>
          <h2 className="center reveal">
            My <span>Projects</span>
          </h2>
          <div className="filters">
            {[
              ["all", "All projects"],
              ["web", "Web & AI"],
              ["research", "Research"],
            ].map(([v, t]) => (
              <button
                aria-pressed={filter === v}
                className={filter === v ? "selected" : ""}
                onClick={() => setFilter(v)}
                key={v}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => filter === "all" || p.kind === filter)
              .map((p) => (
                <article className="project-card" key={p.id}>
                  <ProjectArt id={p.id} />
                  <div className="project-body">
                    <span className="project-category">{p.label}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <details>
                      <summary>
                        Project details <span>+</span>
                      </summary>
                      <ul>
                        {p.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </details>
                    <div className="project-links">
                      {p.live && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={p.live}
                        >
                          Live website
                        </a>
                      )}
                      {p.code && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={p.code}
                        >
                          Source code
                        </a>
                      )}
                      {!p.live && (
                        <span className="pending">
                          {p.kind === "research"
                            ? "Paper / certificate link to add"
                            : "Demo / source links to add"}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <section id="contact" className="section contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>
              Contact <span>Me</span>
            </h2>
            <h3>Have an idea or an opportunity?</h3>
            <p>
              I'm looking for an entry-level software or full-stack developer
              role where I can learn from a team and contribute to real
              projects.
            </p>
            <div className="contact-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:chanduchess122@gmail.com"
              >
                chanduchess122@gmail.com
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/chandan-gowda-k-s/"
              >
                LinkedIn ↗
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ChandanGowdaKS"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <div className="contact-card reveal">
            <span>&lt;/&gt;</span>
            <h3>Let's build something useful.</h3>
            <p>
              Explore my projects and source code, or get to know the person
              behind them.
            </p>
            <button className="btn" onClick={() => nav("projects")}>
              Explore my work ↗
            </button>
            <a className="btn-outline resume-download" href={resume} download="Chandan-Gowda-Resume.pdf">Download resume ↓</a>
            <small>Resume and Delta course certificate included.</small>
          </div>
        </section>
        <footer>
          <span>Chandan Gowda K S</span>
          <button onClick={() => nav("home")} aria-label="Back to top">
            ↑
          </button>
        </footer>
      </div>
    </>
  );
}
