function Footer() {
  const BASE = window.location.pathname.includes("/services/") ? "../" : "";
  const logoSrc = `${BASE}assets/WhatsApp Image 2026-05-09 at 09,19,43-Picsart-BackgroundRemover.png`;

  return (
    <footer className="relative pb-10">
      <div className="site-shell border-t border-[var(--border)] pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div>
              <img src={logoSrc} alt="Auroveon" className="brand-logo brand-logo-footer" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--text-secondary)]">
              <span className="sm:hidden">Design, development, and automation. Delivered end to end.</span>
              <span className="hidden sm:inline">Software agency for AI solutions, modern web platforms, SaaS systems, and cinematic digital
              experiences built for ambitious brands.</span>
            </p>
            <div className="mt-6 footer-social-row">
              <a
                className="footer-social-link"
                href="https://linkedin.com/company/auroveon"
                target="_blank"
                rel="noreferrer"
                aria-label="Auroveon on LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28ZM5.31 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.09 20.45H3.52V9h3.57v11.45ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="https://instagram.com/auroveon"
                target="_blank"
                rel="noreferrer"
                aria-label="Auroveon on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm8.95 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="https://twitter.com/auroveon"
                target="_blank"
                rel="noreferrer"
                aria-label="Auroveon on X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.73L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.24-8.27L1 2h6.4l4.43 5.85L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.6Z" />
                </svg>
              </a>
              <a
                className="footer-social-link"
                href="https://tiktok.com/@auroveon"
                target="_blank"
                rel="noreferrer"
                aria-label="Auroveon on TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.03 2c.2 1.69 1.15 3.16 2.64 4.05.96.58 2.08.88 3.23.87v3.17a8.1 8.1 0 0 1-3.8-.97v6.05c0 3.94-3.19 7.13-7.13 7.13s-7.13-3.19-7.13-7.13 3.19-7.13 7.13-7.13c.33 0 .66.03.98.08v3.23a4 4 0 1 0 2.82 3.82V2h3.26Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="mono-font text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Navigation</div>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a className="footer-link" href={`${BASE}index.html`}>
                Home
              </a>
              <a className="footer-link" href={`${BASE}about.html`}>
                About
              </a>
              <a className="footer-link" href={`${BASE}services.html`}>
                Services
              </a>
              <a className="footer-link" href={`${BASE}portfolio.html`}>
                Portfolio
              </a>
              <a className="footer-link" href={`${BASE}contact.html`}>
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="mono-font text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Services</div>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a className="footer-link" href={`${BASE}services/web-dev.html`}>
                Web Development
              </a>
              <a className="footer-link" href={`${BASE}services/app-dev.html`}>
                App Development
              </a>
              <a className="footer-link" href={`${BASE}services/ai-automation.html`}>
                AI Automation
              </a>
              <a className="footer-link" href={`${BASE}services/seo.html`}>
                SEO
              </a>
              <a className="footer-link" href={`${BASE}services/digital-marketing.html`}>
                Digital Marketing
              </a>
              <a className="footer-link" href={`${BASE}services/ui-ux-design.html`}>
                UI/UX Design
              </a>
            </div>
          </div>

          <div>
            <div className="mono-font text-xs uppercase tracking-[0.18em] text-[var(--accent)]">Contact Us</div>
            <div className="mt-5 flex flex-col gap-4">
              <div>
                <div className="footer-contact-label">Email</div>
                <div className="footer-contact-value">
                  <a className="footer-contact-link" href="mailto:info@auroveon.com">
                    info@auroveon.com
                  </a>
                </div>
              </div>
              <div>
                <div className="footer-contact-label">Phone</div>
                <div className="footer-contact-value">
                  <a className="footer-contact-link" href="tel:+923353213863">
                    +92 335 321 3863
                  </a>
                </div>
              </div>
              <div>
                <div className="footer-contact-label">Address</div>
                <div className="footer-contact-value">Street 4, Karachi, Pakistan</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; 2026</span>
            <img src={logoSrc} alt="Auroveon" className="brand-logo brand-logo-inline" />
            <span>Auroveon. Design, development, and automation. Delivered end to end.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="footer-legal-link" href={`${BASE}privacy-policy.html`}>
              Privacy Policy
            </a>
            <span aria-hidden="true" className="text-[var(--text-secondary)]">
              ·
            </span>
            <a className="footer-legal-link" href={`${BASE}term-service.html`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
