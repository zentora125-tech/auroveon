const BASE = window.location.pathname.includes("/services/") ? "../" : "";

const NAVBAR_SERVICE_ITEMS = [
  { href: "services/web-dev.html", label: "Web Development" },
  { href: "services/app-dev.html", label: "App Development" },
  { href: "services/ai-automation.html", label: "AI Automation" },
  { href: "services/seo.html", label: "SEO" },
  { href: "services/digital-marketing.html", label: "Digital Marketing" },
  { href: "services/ui-ux-design.html", label: "UI/UX Design" },
];

const navbarMotionSource = window.Motion || window.framerMotion || {};

function filterNavbarMotionProps(props) {
  const next = { ...props };
  [
    "initial",
    "animate",
    "exit",
    "transition",
    "variants",
    "whileHover",
    "whileTap",
    "whileInView",
    "viewport",
    "layout",
  ].forEach((key) => delete next[key]);
  return next;
}

const NavbarMotionA =
  navbarMotionSource.motion?.a ||
  ((props) => <a {...filterNavbarMotionProps(props)}>{props.children}</a>);

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [servOpen, setServOpen] = React.useState(false);
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    setPathname(window.location.pathname);

    const sync = () => {
      const nav = document.getElementById("navbar");
      if (!nav) return;
      if (window.scrollY > 10) nav.classList.add("nav-scrolled");
      else nav.classList.remove("nav-scrolled");
    };

    sync();
    window.addEventListener("scroll", sync);
    return () => window.removeEventListener("scroll", sync);
  }, []);

  const isActive = (href) => {
    const target = href.replace(/^\.\.\//, "");
    return pathname.endsWith(target) || pathname.endsWith(target.replace(/^services\//, ""));
  };

  const isServicesActive =
    pathname.includes("/services/") || pathname.endsWith("/services.html") || pathname.endsWith("services.html");

  const activeStyle = { color: "var(--accent)" };

  return (
    <header
      id="navbar"
      className="fixed left-0 top-0 z-50 w-full border-transparent transition-all duration-300"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="site-shell flex h-24 items-center justify-between">
        <a href={`${BASE}index.html`} className="brand-logo-link" aria-label="Auroveon home">
          <img
            src={`${BASE}assets/WhatsApp Image 2026-05-09 at 09,19,43-Picsart-BackgroundRemover.png`}
            alt="Auroveon"
            className="brand-logo brand-logo-nav"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          <a
            className="nav-link text-base font-medium"
            href={`${BASE}index.html`}
            style={isActive("index.html") ? activeStyle : undefined}
          >
            Home
          </a>
          <a
            className="nav-link text-base font-medium"
            href={`${BASE}about.html`}
            style={isActive("about.html") ? activeStyle : undefined}
          >
            About
          </a>
          <div className="nav-dropdown-wrap">
            <a
              className="nav-dropdown-btn text-base"
              href={`${BASE}services.html`}
              aria-haspopup="true"
              style={isServicesActive ? activeStyle : undefined}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="nav-dropdown -mt-3">
              {NAVBAR_SERVICE_ITEMS.map((item) => (
                <a key={item.href} href={`${BASE}${item.href}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <a
            className="nav-link text-base font-medium"
            href={`${BASE}portfolio.html`}
            style={isActive("portfolio.html") ? activeStyle : undefined}
          >
            Portfolio
          </a>
          <a
            className="nav-link text-base font-medium"
            href={`${BASE}contact.html`}
            style={isActive("contact.html") ? activeStyle : undefined}
          >
            Contact
          </a>
        </nav>

        <div className="hidden lg:block">
          <NavbarMotionA
            href={`${BASE}contact.html`}
            whileHover={{ y: -2, scale: 1.02 }}
            className="display-font inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-base font-semibold"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              background: "rgba(57,255,20,0.02)",
            }}
          >
            Start a Project
          </NavbarMotionA>
        </div>

        <button
          type="button"
          className="glass-panel flex h-12 w-12 items-center justify-center rounded-full lg:hidden"
          style={{ borderColor: "var(--border)" }}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="text-xl text-[var(--text-primary)]">{open ? "×" : "+"}</span>
        </button>
      </div>

      {open && (
        <div className="site-shell pb-4 lg:hidden" style={{background: 'linear-gradient(180deg, rgba(10,15,10,0.82), rgba(8,12,8,0.78))', backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)', borderTop: '1px solid rgba(57,255,20,0.08)'}}>
          <div className="glass-panel rounded-[28px] px-6 py-6">
            <div className="flex flex-col gap-5 text-center">
              <a
                href={`${BASE}index.html`}
                className="display-font text-2xl font-bold italic"
                style={isActive("index.html") ? activeStyle : { color: "var(--text-primary)" }}
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                href={`${BASE}about.html`}
                className="display-font text-2xl font-bold italic"
                style={isActive("about.html") ? activeStyle : { color: "var(--text-primary)" }}
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={`${BASE}services.html`}
                    className="display-font text-2xl font-bold italic"
                    style={isServicesActive ? activeStyle : { color: "var(--text-primary)" }}
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </a>
                  <button
                    type="button"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      padding: "0 4px",
                    }}
                    aria-label="Toggle services menu"
                    onClick={() => setServOpen((current) => !current)}
                  >
                    {servOpen ? "▴" : "▾"}
                  </button>
                </div>
                {servOpen && (
                  <div className="mob-dropdown open">
                    {NAVBAR_SERVICE_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={`${BASE}${item.href}`}
                        onClick={() => {
                          setOpen(false);
                          setServOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={`${BASE}portfolio.html`}
                className="display-font text-2xl font-bold italic"
                style={isActive("portfolio.html") ? activeStyle : { color: "var(--text-primary)" }}
                onClick={() => setOpen(false)}
              >
                Portfolio
              </a>
              <a
                href={`${BASE}contact.html`}
                className="display-font text-2xl font-bold italic"
                style={isActive("contact.html") ? activeStyle : { color: "var(--text-primary)" }}
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
