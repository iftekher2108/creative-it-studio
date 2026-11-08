import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Code2,
  Layers3,
  MousePointer2,
  Palette,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  FAQList,
  PortfolioGrid,
  TestimonialSlider,
} from "../components/Interactions";
import {
  ButtonLink,
  CheckList,
  Icon,
  SectionHeading,
  SiteShell,
} from "../components/SiteShell";
import {
  portfolioProjects,
  processSteps,
  promises,
  services,
} from "../components/siteData";

export default function Home() {
  return (
    <SiteShell
      title="Creative Digital Experiences That Drive Growth"
      description="Creative It Studio builds modern websites, memorable brands, engaging videos, and smart digital solutions for ambitious businesses."
    >
      <section className="hero-section">
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              WE CODE. WE DESIGN. WE ELEVATE.
            </p>
            <h1>
              Build your digital presence.
              <br />
              <span>Grow your business.</span>
            </h1>
            <p className="hero-description">
              From stunning websites and creative branding to engaging videos
              and smart digital solutions, we help transform your ideas into
              meaningful digital experiences.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Start Your Project</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore Our Services
              </ButtonLink>
            </div>
            <div className="hero-proof">
              <span className="proof-avatars">
                <i>CI</i>
                <i>ST</i>
                <i>+</i>
              </span>
              <span>
                Thoughtful design.
                <br />
                <b>Built for momentum.</b>
              </span>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="container hero-bottom">
          <div className="scroll-prompt">
            <MousePointer2 size={15} /> Scroll to explore{" "}
            <ArrowDownRight size={16} />
          </div>
          <div className="hero-index">
            01 <span /> 04
          </div>
        </div>
      </section>

      <section className="promise-section">
        <div className="container promise-grid">
          {promises.map((item) => (
            <div className="promise-item" key={item.title}>
              <span className="promise-number">{item.eyebrow}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-intro">
        <div className="container split-grid">
          <div className="about-statement">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE STUDIO
            </p>
            <h2>
              Creativity <span>meets</span>
              <br />
              technology.
            </h2>
            <div className="orbital-mark">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <span>CI</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">
              At Creative It Studio, we believe every business deserves a
              powerful digital identity. We combine modern design, technology,
              and creativity to help businesses stand out.
            </p>
            <p>
              Our approach is practical and collaborative: understand the
              opportunity, make the complex feel clear, and create work your
              audience can trust.
            </p>
            <ButtonLink href="/about" variant="ghost">
              More about the studio
            </ButtonLink>
            <div className="mini-features">
              <span>
                <Check size={15} />
                Creative thinking
              </span>
              <span>
                <Check size={15} />
                Modern technology
              </span>
              <span>
                <Check size={15} />
                Quality execution
              </span>
              <span>
                <Check size={15} />
                Customer-focused approach
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Everything your business needs to grow digitally."
          >
            One creative partner for the moments that matter—from your first
            online presence to the next level of your digital operation.
          </SectionHeading>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                href={service.href}
                className={`service-card service-card-${service.accent}`}
                key={service.key}
              >
                <div className="service-card-top">
                  <span className="service-index">0{index + 1}</span>
                  <div className="icon-box">
                    <Icon name={service.icon} size={25} />
                  </div>
                </div>
                <p className="card-kicker">{service.kicker}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">
                  Explore service <ArrowUpRight size={17} />
                </span>
                <div className="card-blob" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="why-header">
            <SectionHeading
              eyebrow="WHY CREATIVE IT STUDIO"
              title="Make your next move count."
            />
            <p>
              Good digital work is more than a beautiful surface. It should
              create clarity, build trust, and make it easier for the right
              people to say yes.
            </p>
          </div>
          <div className="why-grid">
            {[
              [
                Sparkles,
                "Creative Approach",
                "We look for the clearest, most useful way to express what makes your business different.",
              ],
              [
                ShieldCheck,
                "Quality Work",
                "Strong systems, careful details, and a high bar for the work that reaches your audience.",
              ],
              [
                Code2,
                "Modern Technology",
                "Purposeful tools and dependable foundations without unnecessary technical complexity.",
              ],
              [
                Clock3,
                "On-Time Delivery",
                "Transparent milestones and focused communication keep the project moving forward.",
              ],
              [
                BriefcaseBusiness,
                "Customer Support",
                "A collaborative partner who stays clear, responsive, and invested in your outcome.",
              ],
              [
                Target,
                "Business-Focused Solutions",
                "Creative decisions connected to your goals, customers, and the next stage of growth.",
              ],
            ].map(([IconComp, title, text]) => (
              <div className="why-card" key={title}>
                <IconComp size={23} />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="why-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="SELECTED DIRECTIONS"
              title="Work with a point of view."
            />
            <ButtonLink href="/portfolio" variant="ghost">
              View all demos
            </ButtonLink>
          </div>
          <p className="portfolio-intro">
            A sample of concept work demonstrating how we approach digital
            products, identities, campaigns, and content. Real client work will
            be added with permission.
          </p>
          <PortfolioGrid compact />
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A clear path from idea to impact."
            align="center"
          >
            A collaborative process designed to keep the work focused, useful,
            and moving.
          </SectionHeading>
          <div className="process-line">
            {processSteps.map((step) => (
              <div className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="center-action">
            <ButtonLink href="/how-it-works" variant="outline">
              See the full process
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section pricing-preview">
        <div className="container">
          <div className="pricing-panel">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                FLEXIBLE STARTING POINTS
              </p>
              <h2>
                Let&apos;s shape the right scope
                <br />
                <span>for your next chapter.</span>
              </h2>
              <p>
                Use these as conversation starters, not fixed packages. We will
                recommend the right approach once we understand the work.
              </p>
              <ButtonLink href="/pricing">Explore pricing</ButtonLink>
            </div>
            <div className="pricing-cards">
              <div>
                <span>01 / STARTER</span>
                <h3>Build the base</h3>
                <strong>Quote on request</strong>
                <p>
                  For a focused launch, landing page, or first creative system.
                </p>
              </div>
              <div className="featured-price">
                <span>02 / PROFESSIONAL</span>
                <h3>Build momentum</h3>
                <strong>Quote on request</strong>
                <p>For a complete digital presence with room to grow.</p>
                <b className="price-badge">Most flexible</b>
              </div>
              <div>
                <span>03 / CUSTOM SOLUTION</span>
                <h3>Solve the complex</h3>
                <strong>Quote on request</strong>
                <p>
                  For tailored workflows, software, or multi-part campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-grid">
          <div>
            <SectionHeading
              eyebrow="A SPACE FOR YOUR STORY"
              title="Let the work speak for itself."
            />
            <p className="testimonial-note">
              Client stories will live here as projects launch. We never invent
              names, ratings, or outcomes—only approved stories from real
              collaborations.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <section className="section faq-preview">
        <div className="container faq-grid">
          <div>
            <SectionHeading
              eyebrow="QUICK ANSWERS"
              title="Questions before we begin?"
            />
            <p>
              Start with the basics, then bring us the questions that are
              specific to your idea.
            </p>
            <ButtonLink href="/faq" variant="ghost">
              Visit all FAQs
            </ButtonLink>
          </div>
          <FAQList limit={5} />
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              YOUR NEXT MOVE
            </p>
            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s make it happen.</span>
            </h2>
            <p>
              Your next big idea deserves the right creative partner. Let&apos;s
              discuss your project and create something meaningful together.
            </p>
          </div>
          <div className="final-cta-actions">
            <ButtonLink href="/contact">Start Your Project</ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
          <div className="cta-orbit">
            <div />
            <div />
            <span>✦</span>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual reveal">
      <div className="visual-grid" />
      <div className="visual-label label-top">
        <span className="status-pulse" />
        Creative systems / 2026
      </div>
      <div className="screen-main">
        <div className="screen-bar">
          <span />
          <span />
          <span />
          <b>creative.it</b>
        </div>
        <div className="screen-content">
          <div className="screen-copy">
            <small>BUILD / CREATE / ELEVATE</small>
            <strong>
              Make your
              <br />
              <em>mark.</em>
            </strong>
            <span className="fake-button">
              Explore <ArrowUpRight size={11} />
            </span>
          </div>
          <div className="screen-sphere" />
        </div>
      </div>
      <div className="floating-card code-card">
        <div className="tiny-dots">
          <i />
          <i />
          <i />
        </div>
        <code>
          <span>const</span> future = <b>creative</b>();
          <br />
          <span>return</span> future.<em>grow</em>();
        </code>
      </div>
      <div className="floating-card timeline-card">
        <div className="timeline-head">
          <Play size={11} fill="currentColor" /> edit timeline{" "}
          <span>00:42</span>
        </div>
        <div className="timeline">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="floating-card palette-card">
        <span className="color-dot blue" />
        <span className="color-dot purple" />
        <span className="color-dot pink" />
        <small>
          BRAND
          <br />
          DIRECTION
        </small>
      </div>
      <div className="visual-orbit orbit-a" />
      <div className="visual-orbit orbit-b" />
      <div className="visual-caption">
        <Layers3 size={14} /> Design / Code / Motion
      </div>
    </div>
  );
}
