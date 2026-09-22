import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import {
  SECTIONS,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATIONS,
  SKILLS,
} from "@/data/resume";

const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule-heavy pb-2.5">
      <span className="label-mono">
        {index} / {title.toUpperCase()}
      </span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11.5px] text-foreground/80 bg-secondary px-2.5 py-1">
      {children}
    </span>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pt-2.5">
      {items.map((b) => (
        <li
          key={b}
          className="text-[13.5px] leading-[1.58] text-foreground/75 flex gap-2 max-w-[78ch]"
        >
          <span className="text-primary shrink-0" aria-hidden="true">
            &mdash;
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");
  const heroRef = useRef<HTMLElement | null>(null);
  // Set while a click-driven smooth scroll is in flight, so the highlight
  // stays on the clicked section instead of flickering through the ones
  // the viewport passes on the way there.
  const lockedRef = useRef<string | null>(null);

  // Swap the top bar for the sidebar once the hero has scrolled away.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Highlight whichever section is currently in view.
  //
  // Picking the topmost section inside a detection band is not enough on its
  // own: the final section is short and sits at the end of the document, so
  // the page runs out of scroll before it can reach that band. Whenever the
  // viewport is resting at the bottom, the last section wins outright.
  useEffect(() => {
    const ids: string[] = SECTIONS.map((s) => s.id);
    let fromObserver: string = ids[0];

    const atPageBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const resolve = () => {
      if (lockedRef.current) {
        setActive(lockedRef.current);
        return;
      }
      setActive(atPageBottom() ? ids[ids.length - 1] : fromObserver);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) fromObserver = visible.target.id;
        resolve();
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", resolve, { passive: true });
    window.addEventListener("resize", resolve);
    resolve();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", resolve);
      window.removeEventListener("resize", resolve);
    };
  }, []);

  // Reveal content blocks as they enter the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    lockedRef.current = id;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth" });

    // Release the lock once the page has stopped moving.
    let timer: ReturnType<typeof setTimeout>;
    const release = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        lockedRef.current = null;
        window.removeEventListener("scroll", release);
      }, 120);
    };
    window.addEventListener("scroll", release, { passive: true });
    release();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Top bar: covers the hero, retracts on scroll ---------- */}
      <nav
        aria-label="Primary"
        className={`fixed top-0 left-0 right-0 z-50 bg-background border-b-[1.5px] border-[hsl(var(--ink))] transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-full px-6 md:px-12 xl:px-16 h-[62px] flex items-center justify-between">
          <span className="font-mono text-sm font-bold tracking-tight">
            ~/youssef-abdelrahman
          </span>
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {SECTIONS.map((s, i) => {
              const isLast = i === SECTIONS.length - 1;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={
                    isLast
                      ? "font-mono text-[13px] text-background bg-[hsl(var(--ink))] px-4 py-[7px] hover:bg-primary transition-colors"
                      : "font-mono text-[13px] text-muted-foreground hover:text-primary transition-colors"
                  }
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Narrower screens: the full list will not fit, so show a short one. */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {SECTIONS.filter((s) =>
              ["about", "experience", "projects"].includes(s.id),
            ).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="font-mono text-[13px] text-muted-foreground hover:text-primary transition-colors"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="font-mono text-[13px] text-background bg-[hsl(var(--ink))] px-4 py-[7px] hover:bg-primary transition-colors"
            >
              contact
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header
        ref={heroRef}
        className="border-b-[1.5px] border-[hsl(var(--ink))] pt-[62px]"
      >
        <div className="w-full px-6 md:px-12 xl:px-16 py-14 md:py-[70px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="lg:flex-[1.6] min-w-0 flex flex-col gap-5">
              <span className="font-mono text-[12.5px] text-primary">
                MSc Cybersecurity &middot; KTH Royal Institute of Technology
              </span>

              <h1 className="text-5xl md:text-[66px] leading-[1.04] font-bold tracking-[-0.035em]">
                Youssef
                <br />
                Abdelrahman
              </h1>

              <div className="accent-bar" aria-hidden="true" />

              <p className="text-base md:text-[17.5px] leading-[1.62] text-foreground/80 max-w-[62ch]">
                M.Sc. Cybersecurity student at KTH with hands-on experience in
                penetration testing, network security, cloud systems and backend
                development. Top 2% on TryHackMe, CompTIA Security+ certified,
                and first author of an IEEE NILES 2026 paper on DRL-based cloud
                resource management.
              </p>

              <div className="flex flex-wrap gap-9 pt-1">
                <div>
                  <div className="font-mono text-xl font-bold text-primary">
                    Top 2%
                  </div>
                  <div className="text-[12.5px] text-muted-foreground pt-0.5">
                    TryHackMe global
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-primary">
                    4
                  </div>
                  <div className="text-[12.5px] text-muted-foreground pt-0.5">
                    Industry internships
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xl font-bold text-primary">
                    13%
                  </div>
                  <div className="text-[12.5px] text-muted-foreground pt-0.5">
                    Cloud cost reduction
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  onClick={() => scrollTo("projects")}
                  className="font-mono text-[13.5px] font-medium text-background bg-[hsl(var(--ink))] px-5 py-3 hover:bg-primary transition-colors"
                >
                  view work &rarr;
                </button>
                <a
                  href="https://github.com/Enovac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13.5px] font-medium border-[1.5px] border-[hsl(var(--ink))] px-5 py-3 hover:bg-secondary transition-colors"
                >
                  github
                </a>
              </div>
            </div>

            <div className="terminal w-full lg:flex-1 lg:max-w-[620px] p-6 lg:text-[13.5px]">
              <div className="terminal-dim pb-3">$ whoami --verbose</div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">location</span>
                {"  Stockholm, SE"}
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">citizen</span>
                {"   Swedish"}
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">langs</span>
                {"     EN fluent · AR fluent · SV intermediate"}
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">certs</span>
                {"     Security+ · Google CS"}
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">thm</span>
                {"       top 2% global"}
              </div>

              <div className="terminal-dim pt-3 pb-1">$ cat ./contact</div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">email</span>
                {"     "}
                <a
                  href="mailto:youssef.amr.anter@gmail.com"
                  className="terminal-link"
                >
                  youssef.amr.anter@gmail.com
                </a>
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">phone</span>
                {"     "}
                <a href="tel:+46727611724" className="terminal-link">
                  +46 72 761 17 24
                </a>
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">github</span>
                {"    "}
                <a
                  href="https://github.com/Enovac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link"
                >
                  github.com/Enovac
                </a>
              </div>
              <div className="whitespace-nowrap">
                <span className="terminal-key">linkedin</span>
                {"  "}
                <a
                  href="https://www.linkedin.com/in/youssef-a-abdelrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link"
                >
                  youssef-a-abdelrahman
                </a>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ---------- Body: sticky sidebar + content ---------- */}
      <div className="w-full flex items-start">
        <aside
          aria-label="Section navigation"
          className="hidden lg:flex w-[326px] xl:w-[360px] shrink-0 sticky top-0 h-screen flex-col px-8 xl:px-10 py-11 bg-[hsl(var(--surface))] border-r-[1.5px] border-[hsl(var(--ink))]"
        >
          <div>
            <span className="font-mono text-xs text-muted-foreground">
              ~/portfolio
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="block text-left text-2xl font-bold leading-tight tracking-[-0.03em] mt-4 hover:text-primary transition-colors"
            >
              Youssef
              <br />
              Abdelrahman
            </button>

            <div className="accent-bar !w-12 mt-3.5" aria-hidden="true" />

            <p className="text-[13.5px] leading-relaxed text-muted-foreground mt-4">
              M.Sc. Cybersecurity at KTH. Penetration testing, network security
              and cloud systems.
            </p>

            <nav className="flex flex-col gap-px mt-7">
              {SECTIONS.map((s, i) => {
                const isActive = active === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-mono text-[13px] text-left px-2.5 py-2 transition-colors ${
                      isActive
                        ? "bg-[hsl(var(--ink))] text-background"
                        : "text-foreground/75 hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} {s.label}
                  </button>
                );
              })}
            </nav>
          </div>

        </aside>

        <main className="flex-1 min-w-0 px-6 md:px-10 xl:px-14 py-11 flex flex-col gap-11">
          {/* ---- Education ---- */}
          <section id="education" className="reveal">
            <SectionHeading index="01" title="Education" />
            <div className="flex flex-col pt-1.5">
              <article className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-5 border-b border-border">
                <h3 className="text-base font-semibold tracking-tight">
                  M.Sc. Cybersecurity
                </h3>
                <span className="font-mono text-[12.5px] text-primary">
                  KTH Royal Institute of Technology
                </span>
                <span className="font-mono text-[11.5px] text-muted-foreground ml-auto whitespace-nowrap">
                  2026 &mdash; 2028 (expected)
                </span>
                <p className="w-full text-[13.5px] leading-[1.58] text-muted-foreground">
                  Stockholm, Sweden
                </p>
              </article>

              <article className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-5">
                <h3 className="text-base font-semibold tracking-tight">
                  B.Sc. Media Engineering and Technology
                </h3>
                <span className="font-mono text-[12.5px] text-primary">
                  German International University in Berlin
                </span>
                <span className="font-mono text-[11.5px] text-muted-foreground ml-auto whitespace-nowrap">
                  2022 &mdash; 2026
                </span>
                <p className="w-full text-[13.5px] leading-[1.58] text-muted-foreground">
                  Computer Science and Engineering (CSEN) track &middot; Berlin, Germany
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1.5 w-full">
                  <Tag>GPA: A+</Tag>
                  <Tag>Graduated with Highest Honors</Tag>
                </div>
              </article>
            </div>
          </section>

          {/* ---- Research ---- */}
          <section id="publications" className="reveal">
            <SectionHeading index="02" title="Publications" />
            <article className="pt-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold tracking-tight max-w-2xl">
                  Coordinated DRL for Hybrid Elastic Scaling and Task Scheduling
                  in Cloud Resource Management
                </h3>
                <span className="font-mono text-[11px] text-background bg-[hsl(var(--ink))] px-2 py-0.5">
                  FIRST AUTHOR
                </span>
              </div>
              <p className="font-mono text-[12.5px] text-primary pt-1.5">
                IEEE conference paper &middot; NILES 2026
              </p>
              <p className="text-[13.5px] leading-[1.58] text-foreground/75 pt-2.5 max-w-[80ch]">
                Coordinated deep reinforcement learning agents for elastic
                scaling and task scheduling in cloud resource management,
                reducing execution cost by 13% against a rule-based threshold
                scaler while achieving lower average task latency and less
                overprovisioning.
              </p>
            </article>
          </section>

          {/* ---- Certifications ---- */}
          <section id="certifications" className="reveal">
            <SectionHeading index="03" title="Certifications" />
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {CERTIFICATIONS.map((c) => (
                <a
                  key={c.name}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 border border-border p-3.5 hover:border-[hsl(var(--ink))] transition-colors"
                >
                  <div className="logo-plate w-12 h-12 p-1">
                    <img src={assetUrl(c.image)} alt="" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14px] font-semibold leading-snug group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <p className="font-mono text-[11.5px] text-muted-foreground pt-0.5">
                      {c.issuer}
                    </p>
                  </div>
                  <ExternalLink
                    className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>

          {/* ---- Experience ---- */}
          <section id="experience" className="reveal">
            <SectionHeading index="04" title="Experience" />
            <div className="flex flex-col pt-1.5">
              {EXPERIENCE.map((job, i) => (
                <article
                  key={job.company}
                  className={`flex gap-5 py-5 ${
                    i < EXPERIENCE.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="logo-plate w-12 h-12 md:w-14 md:h-14 p-1.5">
                    <img
                      src={assetUrl(job.logo)}
                      alt={`${job.company} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold tracking-tight">
                        {job.role}
                      </h3>
                      <span className="font-mono text-[12.5px] text-primary">
                        {job.company}
                      </span>
                      <span className="font-mono text-[11.5px] text-muted-foreground ml-auto whitespace-nowrap">
                        {job.dates}
                      </span>
                    </div>

                    <Bullets items={job.bullets} />

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {job.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ---- Skills ---- */}
          <section id="skills" className="reveal">
            <SectionHeading index="05" title="Skills" />
            <div className="flex flex-col pt-1.5">
              {SKILLS.map((s, i) => (
                <div
                  key={s.group}
                  className={`flex flex-col sm:flex-row gap-2 sm:gap-5 py-3.5 ${
                    i < SKILLS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="label-mono sm:w-44 shrink-0 sm:pt-1.5">
                    {s.group.toUpperCase()}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---- Projects ---- */}
          <section id="projects" className="reveal">
            <SectionHeading index="06" title="Projects" />
            <div className="flex flex-col pt-1.5">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.name}
                  className={`py-5 ${
                    i < PROJECTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-base font-semibold tracking-tight hover:text-primary transition-colors"
                    >
                      {p.name}
                      <ExternalLink
                        className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                    <span
                      className={`font-mono text-[11px] px-2 py-0.5 ${
                        p.solid
                          ? "text-background bg-primary"
                          : "text-foreground border border-[hsl(var(--ink))]"
                      }`}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <p className="text-[13px] text-muted-foreground pt-1">
                    {p.tagline}
                  </p>

                  <Bullets items={p.bullets} />

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ---- Contact ---- */}
          <section id="contact" className="reveal">
            <SectionHeading index="07" title="Contact" />
            <p className="text-[15.5px] leading-relaxed text-foreground/85 pt-4 max-w-2xl">
              I am open to 2026 opportunities in security engineering,
              penetration testing and cloud infrastructure.
            </p>

            <div className="flex flex-col pt-5 max-w-xl">
              <a
                href="mailto:youssef.amr.anter@gmail.com"
                className="flex items-center gap-3 border-b border-border py-3 hover:text-primary transition-colors"
              >
                <Mail
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] text-muted-foreground w-20 shrink-0">
                  email
                </span>
                <span className="text-[14px]">youssef.amr.anter@gmail.com</span>
              </a>
              <a
                href="tel:+46727611724"
                className="flex items-center gap-3 border-b border-border py-3 hover:text-primary transition-colors"
              >
                <span
                  className="w-4 h-4 text-primary shrink-0 font-mono text-[13px] leading-4 text-center"
                  aria-hidden="true"
                >
                  #
                </span>
                <span className="font-mono text-[13px] text-muted-foreground w-20 shrink-0">
                  phone
                </span>
                <span className="text-[14px]">+46 72 761 17 24</span>
              </a>
              <a
                href="https://github.com/Enovac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-border py-3 hover:text-primary transition-colors"
              >
                <Github
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] text-muted-foreground w-20 shrink-0">
                  github
                </span>
                <span className="text-[14px]">github.com/Enovac</span>
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-a-abdelrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-border py-3 hover:text-primary transition-colors"
              >
                <Linkedin
                  className="w-4 h-4 text-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] text-muted-foreground w-20 shrink-0">
                  linkedin
                </span>
                <span className="text-[14px]">youssef-a-abdelrahman</span>
              </a>
            </div>
          </section>

          <footer className="border-t-[1.5px] border-[hsl(var(--ink))] pt-5 mt-2">
            <p className="font-mono text-[12px] text-muted-foreground">
              &copy; 2026 Youssef Abdelrahman &middot; Stockholm, Sweden
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
