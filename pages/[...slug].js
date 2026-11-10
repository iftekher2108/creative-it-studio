import {
  ArrowUpRight,
  Check,
  ChevronRight,
  FileText,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  ContactForm,
  FAQList,
  PortfolioGrid,
} from "../components/Interactions";
import {
  ButtonLink,
  CheckList,
  Icon,
  SectionHeading,
  SiteShell,
} from "../components/SiteShell";
import {
  faqs,
  journeySteps,
  processSteps,
  services,
} from "../components/siteData";

const serviceByKey = Object.fromEntries(
  services.map((service) => [service.key, service]),
);
const routePaths = [
  "about",
  "services",
  "services/web-development",
  "services/graphic-design-branding",
  "services/video-editing",
  "services/digital-solutions",
  "portfolio",
  "pricing",
  "how-it-works",
  "faq",
  "contact",
  "privacy-policy",
  "terms-conditions",
];

export async function getStaticPaths() {
  return {
    paths: routePaths.map((path) => ({ params: { slug: path.split("/") } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { path: params.slug.join("/") } };
}

export default function InternalPage({ path }) {
  const service = serviceByKey[path.replace("services/", "")];
  if (service) return <ServicePage service={service} />;
  const content = {
    about: <AboutPage />,
    services: <ServicesPage />,
    portfolio: <PortfolioPage />,
    pricing: <PricingPage />,
    "how-it-works": <HowItWorksPage />,
    faq: <FAQPage />,
    contact: <ContactPage />,
    "privacy-policy": <PolicyPage type="privacy" />,
    "terms-conditions": <PolicyPage type="terms" />,
  }[path];
  return content || <NotFound />;
}

function PageHero({ eyebrow, title, description, accent = "blue", children }) {
  return (
    <section className={`page-hero page-hero-${accent}`}>
      <div className="page-hero-shape" />
      <div className="container page-hero-inner">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          {description && (
            <p className="page-hero-description">{description}</p>
          )}
          {children && <div className="page-hero-actions">{children}</div>}
        </div>
        <div className="page-hero-index">
          <span>CI</span>
          <small>
            Creative
            <br />
            It
            <br />
            Studio
          </small>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <SiteShell
      title="About Us"
      description="Meet Creative It Studio, a creative digital agency combining modern design, technology, and practical thinking."
    >
      <PageHero
        eyebrow="ABOUT THE STUDIO"
        title={
          <>
            Built for ideas
            <br />
            <span>with somewhere to go.</span>
          </>
        }
        description="Creative It Studio is a creative digital agency helping individuals, startups, entrepreneurs, and established businesses build a stronger digital presence."
        accent="purple"
      />
      <section className="section">
        <div className="container narrative-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              WHO WE ARE
            </p>
            <h2>
              Make the complex feel <span>clear.</span>
            </h2>
          </div>
          <div>
            <p className="lead">
              We combine modern design, technology, and creativity to turn ideas
              into practical digital experiences that help businesses grow,
              attract customers, and build a strong brand identity.
            </p>
            <p>
              Our work sits at the intersection of what looks good, what works
              well, and what your audience needs next. We do not invent company
              history or awards to make a story sound bigger. We focus on the
              opportunity in front of us and the quality of the work we can do
              together.
            </p>
          </div>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="Principles over noise."
            align="center"
          />
          <div className="values-grid">
            <Value
              icon={Lightbulb}
              title="Our Mission"
              text="Transform creative ideas into practical digital experiences that help businesses grow, attract customers, and build a stronger brand identity."
            />
            <Value
              icon={Target}
              title="Our Vision"
              text="Make thoughtful, high-quality digital work feel more accessible to businesses with ambition and a clear point of view."
            />
            <Value
              icon={HeartHandshake}
              title="Our Core Values"
              text="Clarity, care, curiosity, quality, and honest collaboration in every stage of the work."
            />
            <Value
              icon={Sparkles}
              title="What Makes Us Different"
              text="We connect creative decisions to business value, keeping the experience premium without making it feel complicated."
            />
          </div>
        </div>
      </section>
      <section className="section approach-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              OUR APPROACH
            </p>
            <h2>
              Good work starts with <span>good questions.</span>
            </h2>
            <p className="lead">
              Before we make, we listen. Before we add, we clarify. Before we
              launch, we make sure the work is useful to the people it needs to
              reach.
            </p>
          </div>
          <div className="approach-list">
            <div>
              <b>01</b>
              <span>Understand the context</span>
              <p>
                Your goals, audience, constraints, and the opportunity behind
                the request.
              </p>
            </div>
            <div>
              <b>02</b>
              <span>Choose the right shape</span>
              <p>
                A focused page, a flexible identity, a thoughtful edit, or a
                practical digital system.
              </p>
            </div>
            <div>
              <b>03</b>
              <span>Make it real</span>
              <p>
                Clear milestones, collaborative feedback, and a handover you can
                use with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </SiteShell>
  );
}

function Value({ icon: IconComp, title, text }) {
  return (
    <div className="value-card">
      <IconComp size={24} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <SiteShell
      title="Services"
      description="Explore web development, graphic design, video editing, and digital solutions from Creative It Studio."
    >
      <PageHero
        eyebrow="OUR CAPABILITIES"
        title={
          <>
            One studio.
            <br />
            <span>Many ways forward.</span>
          </>
        }
        description="Choose the service that matches the opportunity in front of you—or bring us the whole picture and we will help shape the right scope."
      />
      <section className="section">
        <div className="container services-page-grid">
          {services.map((service, index) => (
            <Link
              href={service.href}
              className={`large-service-card service-card-${service.accent}`}
              key={service.key}
            >
              <div className="large-service-number">0{index + 1}</div>
              <div className="icon-box">
                <Icon name={service.icon} size={28} />
              </div>
              <p className="card-kicker">{service.kicker}</p>
              <h2>{service.title}</h2>
              <p>{service.details}</p>
              <CheckList items={service.features.slice(0, 4)} />
              <span className="card-link">
                View service <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </SiteShell>
  );
}

function ServicePage({ service }) {
  return (
    <SiteShell title={service.shortTitle} description={service.description}>
      <PageHero
        eyebrow={service.kicker.toUpperCase()}
        title={
          <>
            {service.shortTitle}.<br />
            <span>Made to move you forward.</span>
          </>
        }
        description={service.description}
        accent={service.accent}
      >
        <ButtonLink href="/contact">Request a Quote</ButtonLink>
      </PageHero>
      <section className="section">
        <div className="container narrative-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THE OPPORTUNITY
            </p>
            <h2>
              Turn a challenge into a <span>clear advantage.</span>
            </h2>
          </div>
          <div>
            <p className="lead">{service.details}</p>
            <p>
              Great creative work should reduce friction for your customers and
              your team. We use the right amount of strategy, craft, and
              technology to make that possible.
            </p>
          </div>
        </div>
      </section>
      <section className="section service-problems">
        <div className="container two-column-cards">
          <div className="problem-panel">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              YOU MAY BE HERE
            </p>
            <h2>Feeling the friction?</h2>
            <ul>
              {service.problems.map((problem) => (
                <li key={problem}>
                  <span>+</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className={`solution-panel panel-${service.accent}`}>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              WE CAN HELP WITH
            </p>
            <h2>Useful, thoughtful solutions.</h2>
            <ul>
              {service.solutions.map((solution) => (
                <li key={solution}>
                  <Check size={16} />
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT YOU GET"
            title="Built around the outcome."
          />
          <div className="benefit-grid">
            {service.benefits.map((benefit, i) => (
              <div key={benefit}>
                <span>0{i + 1}</span>
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-process">
        <div className="container">
          <SectionHeading
            eyebrow="A PRACTICAL PROCESS"
            title="From first conversation to final handover."
            align="center"
          />
          <div className="service-process-grid">
            {service.process.map((item, i) => (
              <div key={item}>
                <b>0{i + 1}</b>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-faq">
        <div className="container faq-grid">
          <div>
            <SectionHeading
              eyebrow="GOOD TO KNOW"
              title="A few answers before we start."
            />
            <ButtonLink href="/faq" variant="ghost">
              Read all FAQs
            </ButtonLink>
          </div>
          <FAQList limit={3} />
        </div>
      </section>
      <CTA title={`Ready to explore ${service.shortTitle.toLowerCase()}?`} />
    </SiteShell>
  );
}

function PortfolioPage() {
  return (
    <SiteShell
      title="Portfolio"
      description="Explore concept work from Creative It Studio across web, branding, graphic design, and video editing."
    >
      <PageHero
        eyebrow="SELECTED DIRECTIONS"
        title={
          <>
            A library of <span>possibility.</span>
          </>
        }
        description="These are demonstration projects designed to show our creative range. Real client work will be added as approved."
        accent="cyan"
      />
      <section className="section">
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>
      <CTA />
    </SiteShell>
  );
}

function PricingPage() {
  const packages = [
    {
      service: "Web Development",
      items: [
        {
          name: "Launch Page",
          target: "Focused launches and campaigns",
          features: [
            "Responsive page system",
            "Clear conversion journey",
            "SEO-ready foundations",
          ],
          time: "Delivery time: to be discussed",
        },
        {
          name: "Growth Website",
          target: "Businesses ready for a stronger presence",
          features: [
            "Multi-page experience",
            "Content and UX direction",
            "Handover and support options",
          ],
          time: "Delivery time: to be discussed",
        },
      ],
    },
    {
      service: "Graphic Design",
      items: [
        {
          name: "Identity Starter",
          target: "New or evolving brands",
          features: [
            "Logo direction",
            "Core visual language",
            "Essential export set",
          ],
          time: "Delivery time: to be discussed",
        },
        {
          name: "Campaign Kit",
          target: "Teams that need consistency",
          features: [
            "Campaign art direction",
            "Social templates",
            "Marketing-ready assets",
          ],
          time: "Delivery time: to be discussed",
        },
      ],
    },
    {
      service: "Video Editing",
      items: [
        {
          name: "Single Story",
          target: "One focused video or launch",
          features: [
            "Edit direction",
            "Captions and sound",
            "Platform-ready export",
          ],
          time: "Delivery time: to be discussed",
        },
        {
          name: "Content Rhythm",
          target: "Ongoing content creators",
          features: [
            "Repeatable edit language",
            "Short-form cutdowns",
            "Organized source files",
          ],
          time: "Delivery time: to be discussed",
        },
      ],
    },
    {
      service: "Digital Solutions",
      items: [
        {
          name: "Clarity Sprint",
          target: "Teams unsure what to improve first",
          features: [
            "Workflow review",
            "Opportunity map",
            "Prioritized next steps",
          ],
          time: "Delivery time: to be discussed",
        },
        {
          name: "Custom Solution",
          target: "Complex operational needs",
          features: [
            "Fit-for-purpose plan",
            "Implementation path",
            "Technical consultation",
          ],
          time: "Delivery time: to be discussed",
        },
      ],
    },
  ];
  return (
    <SiteShell
      title="Pricing"
      description="Flexible, quote-based packages for web development, design, video, and digital solutions."
    >
      <PageHero
        eyebrow="PRICING, WITHOUT THE GUESSWORK"
        title={
          <>
            The right scope.
            <br />
            <span>No made-up numbers.</span>
          </>
        }
        description="We do not invent fixed business prices before understanding the work. Use these packages as editable conversation starters, then request a quote for your actual goals."
        accent="magenta"
      />
      <section className="section">
        <div className="container pricing-sections">
          {packages.map((group) => (
            <div className="pricing-group" key={group.service}>
              <div className="pricing-group-title">
                <p className="eyebrow">
                  <span className="eyebrow-line" />
                  {group.service}
                </p>
                <h2>Choose your starting point.</h2>
              </div>
              <div className="package-grid">
                {group.items.map((item, i) => (
                  <div
                    className={`package-card ${i === 1 ? "package-featured" : ""}`}
                    key={item.name}
                  >
                    <span>
                      0{i + 1} / {group.service.toUpperCase()}
                    </span>
                    <h3>{item.name}</h3>
                    <strong>Quote on request</strong>
                    <p className="target-customer">{item.target}</p>
                    <CheckList items={item.features} />
                    <small>{item.time}</small>
                    <ButtonLink
                      href="/contact"
                      variant={i === 1 ? "primary" : "outline"}
                    >
                      Request a Quote
                    </ButtonLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section custom-quote">
        <div className="container custom-quote-inner">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              CUSTOM PROJECTS
            </p>
            <h2>Have a different shape in mind?</h2>
            <p>
              Bring the brief, the rough idea, or even just the problem. We can
              start from there.
            </p>
          </div>
          <ButtonLink href="/contact">Talk about the project</ButtonLink>
        </div>
      </section>
    </SiteShell>
  );
}

function HowItWorksPage() {
  return (
    <SiteShell
      title="How It Works"
      description="Understand the Creative It Studio project journey from first contact to post-delivery support."
    >
      <PageHero
        eyebrow="THE JOURNEY"
        title={
          <>
            Less guesswork.
            <br />
            <span>More forward motion.</span>
          </>
        }
        description="A premium process should feel clear from the outside, too. Here is what the journey can look like."
        accent="blue"
      />
      <section className="section">
        <div className="container journey-list">
          {journeySteps.map((step, i) => (
            <div className="journey-row" key={step}>
              <span className="journey-number">0{i + 1}</span>
              <div>
                <h2>{step}</h2>
                <p>
                  {
                    [
                      "Tell us what you are trying to create or improve.",
                      "Share the context, content, references, and constraints we need to understand the work.",
                      "Discuss what matters most and the investment range that makes sense for the scope.",
                      "Align on the proposal, timeline, deliverables, and next steps.",
                      "We design, build, edit, or shape the agreed solution with clear updates.",
                      "Review the work, share feedback, and refine the details that matter.",
                      "Receive the final files, links, and handover in a format your team can use.",
                      "Choose the support arrangement that makes sense for what comes next.",
                    ][i]
                  }
                </p>
              </div>
              <ChevronRight size={22} />
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteShell>
  );
}

function FAQPage() {
  const categories = [...new Set(faqs.map((faq) => faq.category))];
  return (
    <SiteShell
      title="FAQ"
      description="Searchable answers to common Creative It Studio questions about services, scope, pricing, delivery, and support."
    >
      <PageHero
        eyebrow="FREQUENTLY ASKED"
        title={
          <>
            Clear answers for
            <br />
            <span>the next question.</span>
          </>
        }
        description="If you do not see your answer here, ask it directly. The best project conversations start with context."
        accent="purple"
      />
      <section className="section">
        <div className="container faq-page-grid">
          <aside>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              CATEGORIES
            </p>
            {categories.map((category) => (
              <a
                href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                key={category}
              >
                {category}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </aside>
          <div>
            <FAQList searchable />
          </div>
        </div>
      </section>
      <CTA />
    </SiteShell>
  );
}

function ContactPage() {
  return (
    <SiteShell
      title="Contact Us"
      description="Tell Creative It Studio about your next website, brand, video, or digital solution project."
    >
      <PageHero
        eyebrow="START A CONVERSATION"
        title={
          <>
            Let&apos;s talk about
            <br />
            <span>your project.</span>
          </>
        }
        description="Tell us what you are building, improving, or trying to make clearer. We will use the context to suggest a useful next step."
        accent="cyan"
      />
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-aside">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              CONTACT DETAILS
            </p>
            <h2>
              Bring the brief.
              <br />
              <span>We&apos;ll bring the clarity.</span>
            </h2>
            <p>
              Contact details below are editable placeholders. Add the real
              business channels before launch.
            </p>
            <div className="contact-detail-list">
              <div>
                <MessageCircle size={19} />
                <span>
                  <small>WhatsApp</small> 01580359517
                </span>
              </div>
              <div>
                <FileText size={19} />
                <span>
                  <small>Email</small> IftekherMahmud1@gmail.com
                </span>
              </div>
              <div>
                <Users size={19} />
                <span>
                  <small>Social</small> https://facebook.com/creativeitstudio1

                </span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}

function PolicyPage({ type }) {
  const privacy = type === "privacy";
  return (
    <SiteShell
      title={privacy ? "Privacy Policy" : "Terms & Conditions"}
      description={`${privacy ? "Privacy policy" : "Terms and conditions"} placeholder for Creative It Studio.`}
    >
      <PageHero
        eyebrow="LEGAL"
        title={
          privacy
            ? <>
                Privacy, handled
                <br />
                <span>with care.</span>
              </>
            : <>
                Clear terms for
                <br />
                <span>good collaboration.</span>
              </>
        }
        description="This editable placeholder should be reviewed and finalized with your actual business details before launch."
        accent="blue"
      />
      <section className="section legal-section">
        <div className="container legal-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            LAST UPDATED: [ADD DATE]
          </p>
          {privacy
            ? <>
                <h2>Privacy Policy</h2>
                <p>
                  This page is a starting structure for Creative It
                  Studio&apos;s privacy policy. Replace this copy with the
                  policy that reflects the forms, analytics, cookies, storage,
                  and third-party services actually used by the business.
                </p>
                <h3>Information you may share</h3>
                <p>
                  If you contact Creative It Studio, you may choose to share
                  your name, email address, phone number, service interest,
                  budget range, and project details. Only collect what you need
                  to respond and deliver the agreed service.
                </p>
                <h3>How information is used</h3>
                <p>
                  Use submitted information to respond to enquiries, prepare
                  proposals, communicate about active projects, and provide
                  requested support. Add the retention period and any processors
                  or email providers used by the business.
                </p>
                <h3>Your choices</h3>
                <p>
                  Add the correct process for requesting access, correction,
                  deletion, or other rights that apply to your customers and
                  location.
                </p>
              </>
            : <>
                <h2>Terms &amp; Conditions</h2>
                <p>
                  This page is a starting structure for the terms that govern
                  Creative It Studio&apos;s services. Review it with a qualified
                  professional and replace the placeholders before accepting
                  paid work.
                </p>
                <h3>Scope and proposals</h3>
                <p>
                  Each project should be confirmed in writing with its
                  deliverables, timeline, feedback rounds, responsibilities,
                  payment terms, and any agreed support.
                </p>
                <h3>Client materials and approvals</h3>
                <p>
                  The client is responsible for supplying accurate materials and
                  timely feedback. Approval of a stage means the work can move
                  forward to the next agreed stage.
                </p>
                <h3>Ownership and third parties</h3>
                <p>
                  Add the actual rules for final deliverables, source files,
                  licensed assets, third-party tools, payment, cancellation, and
                  liability.
                </p>
              </>}
        </div>
      </section>
    </SiteShell>
  );
}

function CTA({ title = "Have an idea? Let's make it happen." }) {
  return (
    <section className="final-cta compact-cta">
      <div className="container final-cta-inner">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            READY WHEN YOU ARE
          </p>
          <h2>{title}</h2>
        </div>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </div>
    </section>
  );
}
function NotFound() {
  return (
    <SiteShell title="Not found">
      <PageHero
        eyebrow="404"
        title={
          <>
            This page took
            <br />
            <span>a different route.</span>
          </>
        }
        description="Try the main navigation or head back home."
      />
      <section className="section center-action">
        <ButtonLink href="/">Back home</ButtonLink>
      </section>
    </SiteShell>
  );
}
