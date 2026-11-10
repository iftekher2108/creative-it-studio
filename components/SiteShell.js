import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  Play,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import Image from 'next/image'
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { navItems } from "./siteData";

export function Icon({ name, size = 22, strokeWidth = 1.7, ...props }) {
  const icons = {
    code: Code2,
    palette: Palette,
    play: Play,
    workflow: Workflow,
    layers: Layers3,
    sparkles: Sparkles,
  };
  const Component = icons[name] || Sparkles;
  return <Component size={size} strokeWidth={strokeWidth} {...props} />;
}

export function Logo({ compact = false }) {
  return (
    <Link href="/" className="brand-mark" aria-label="Creative It Studio home">
      {/* <span className="brand-symbol">
        <span />
        <span />
        <span />
      </span> */}
      <span className="brand-wordmark">
        <Image src={'/creative_it_studio.png'} height={50} width={100}  alt="logo" />
        {/* Creative <b>It</b> Studio{compact ? "" : <small>Digital agency</small>} */}
      </span>
    </Link>
  );
}

export function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <div
      className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}
    >
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`button button-${variant} ${className}`}
      {...props}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}

export function SiteShell({
  children,
  title = "Creative It Studio",
  description = "Creative digital experiences that drive growth.",
}) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{`${title} — Creative It Studio`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} — Creative It Studio`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://creativeitstudio.example${router.asPath === "/" ? "" : router.asPath}`}
        />
      </Head>
      <header
        className={`site-header p-2 ${scrolled ? "site-header-scrolled" : ""}`}
      >
        <div className="container nav-wrap">
          <Logo />
          <nav
            className={`desktop-nav ${menuOpen ? "mobile-nav-open" : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={router.pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <ButtonLink href="/contact" className="nav-cta">
              Let&apos;s Talk
            </ButtonLink>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu container">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <ButtonLink href="/contact">Start Your Project</ButtonLink>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo compact />
            <p>
              Creative digital experiences that help ambitious businesses look
              sharper, work smarter, and grow with confidence.
            </p>
            <div className="social-row">
              <a href="https://www.facebook.com/creativeitstudio1/" aria-label="Facebook">
                <Globe2 size={17} />
              </a>
              {/* <a href="https://instagram.com" aria-label="Instagram">
                <Sparkles size={17} />
              </a> */}
              <a href="mailto:iftekhermahmud1@gmail.com" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <Link href="/services/web-development">Web Development</Link>
            {/* <Link href="/services/graphic-design-branding">Graphic Design</Link> */}
            <Link href="/services/video-editing">Video Editing</Link>
            <Link href="/services/digital-solutions">Digital Solutions</Link>
          </div>
          <div className="footer-column footer-contact">
            <h4>Start a conversation</h4>
            <p>
              <MessageCircle size={15} /> 01580359517
            </p>
            <p>
              <Mail size={15} /> iftekhermahmud1@gmail.com
            </p>
            <ButtonLink href="/contact" variant="ghost">
              Tell us about your idea
            </ButtonLink>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Creative It Studio. All Rights Reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible
    ? <button
        type="button"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    : null;
}

export function CheckList({ items }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <span>
            <Check size={14} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
