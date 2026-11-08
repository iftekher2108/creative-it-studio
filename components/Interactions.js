import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
  Search,
  Send,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { faqs, portfolioProjects, testimonials } from "./siteData";

export function PortfolioGrid({ compact = false }) {
  const categories = [
    "All Projects",
    "Web Development",
    "Graphic Design",
    "Branding",
    "Video Editing",
  ];
  const [active, setActive] = useState("All Projects");
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      portfolioProjects.filter((project) => {
        const matchesCategory =
          active === "All Projects" || project.tags.includes(active);
        const haystack =
          `${project.title} ${project.category} ${project.description}`.toLowerCase();
        return matchesCategory && haystack.includes(query.toLowerCase());
      }),
    [active, query],
  );
  const shown = compact ? filtered.slice(0, 3) : filtered;
  return (
    <div className="portfolio-wrap">
      {!compact && (
        <div className="portfolio-toolbar">
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  active === category ? "filter-pill active" : "filter-pill"
                }
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects"
              aria-label="Search projects"
            />
          </label>
        </div>
      )}
      <div className="portfolio-grid">
        {shown.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <Search size={28} />
          <p>No demo projects match that search yet.</p>
          <button
            type="button"
            onClick={() => {
              setActive("All Projects");
              setQuery("");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.visual}`}>
      <div
        className="project-art"
        role="img"
        aria-label={`${project.title} demonstration visual`}
      >
        <span className="art-label">DEMO / CONCEPT</span>
        <div className="art-window">
          <span />
          <span />
          <span />
        </div>
        <div className="art-shape art-shape-one" />
        <div className="art-shape art-shape-two" />
        <div className="art-lines" />
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>2026</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-footer">
          <small>{project.tech}</small>
          <Link
            href="/contact"
            aria-label={`Request details about ${project.title}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FAQList({ limit, searchable = false }) {
  const [open, setOpen] = useState(0);
  const [query, setQuery] = useState("");
  const filtered = faqs.filter((faq) =>
    `${faq.category} ${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const shown = limit ? filtered.slice(0, limit) : filtered;
  return (
    <div className="faq-wrap">
      {searchable && (
        <label className="search-box faq-search">
          <Search size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a question"
            aria-label="Search frequently asked questions"
          />
        </label>
      )}
      <div className="faq-list">
        {shown.map((faq, index) => (
          <div
            className={`faq-item ${open === index ? "open" : ""}`}
            key={faq.question}
          >
            <button
              type="button"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              <span>
                <small>{faq.category}</small>
                {faq.question}
              </span>
              <ChevronDown size={19} />
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      {shown.length === 0 && (
        <div className="empty-state">
          <p>No FAQ matches that search.</p>
        </div>
      )}
    </div>
  );
}

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  return (
    <div className="testimonial-shell">
      <div className="testimonial-quote-mark">“</div>
      <blockquote>{item.quote}</blockquote>
      <div className="testimonial-caption">
        <div>
          <strong>{item.label}</strong>
          <span>{item.role}</span>
        </div>
        <div className="slider-controls">
          <button
            type="button"
            onClick={() =>
              setActive(
                (active - 1 + testimonials.length) % testimonials.length,
              )
            }
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <span>
            0{active + 1} / 0{testimonials.length}
          </span>
          <button
            type="button"
            onClick={() => setActive((active + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    if (
      !form.name.trim() ||
      !/^\S+@\S+\.\S+$/.test(form.email) ||
      !form.service ||
      form.details.trim().length < 20
    ) {
      setStatus({
        type: "error",
        message:
          "Please add your name, a valid email, choose a service, and share at least 20 characters about the project.",
      });
      return;
    }
    setStatus({ type: "loading", message: "Checking the project handoff…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "This form is not connected yet.");
      setStatus({ type: "success", message: data.message });
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        details: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>
          Full Name
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Your name"
          />
        </label>
        <label>
          Email Address
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            placeholder="you@company.com"
          />
        </label>
        <label>
          Phone Number
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="Optional"
          />
        </label>
        <label>
          Select Service
          <select name="service" value={form.service} onChange={update}>
            <option value="">Choose one</option>
            <option>Web Design & Development</option>
            <option>Graphic Design & Branding</option>
            <option>Video Editing</option>
            <option>Digital Solutions</option>
          </select>
        </label>
        <label className="full-field">
          Budget Range
          <select name="budget" value={form.budget} onChange={update}>
            <option value="">Choose a range (optional)</option>
            <option>To be discussed</option>
            <option>Starter scope</option>
            <option>Growth scope</option>
            <option>Custom solution</option>
          </select>
        </label>
        <label className="full-field">
          Project Details
          <textarea
            name="details"
            value={form.details}
            onChange={update}
            placeholder="What are you trying to create, improve, or communicate?"
            rows="6"
          />
        </label>
      </div>
      {status.type !== "idle" && (
        <div className={`form-status ${status.type}`}>
          {status.type === "success"
            ? <CheckCircle2 size={18} />
            : status.type === "loading"
              ? <LoaderCircle className="spin" size={18} />
              : <span className="status-dot" />}
          {status.message}
        </div>
      )}
      <button
        className="button button-primary submit-button"
        type="submit"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? "Sending…" : "Send Project Enquiry"}
        <Send size={17} />
      </button>
      <p className="form-note">
        This demo is validation-ready. Connect the API route to your email, CRM,
        or form provider before launch.
      </p>
    </form>
  );
}
