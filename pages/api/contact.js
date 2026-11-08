export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ message: "Only POST requests are accepted." });
  }

  const { name, email, service, details } = req.body || {};
  if (
    !name ||
    !/^\S+@\S+\.\S+$/.test(email || "") ||
    !service ||
    (details || "").trim().length < 20
  ) {
    return res.status(400).json({
      message:
        "Please provide a name, valid email, service, and at least 20 characters of project detail.",
    });
  }

  // Integration point: connect this validated payload to the business email, CRM,
  // or form provider before launch. This starter intentionally does not claim a
  // successful delivery when no destination is configured.
  return res.status(501).json({
    message:
      "The form is validated, but no delivery destination is configured yet. Add your email or CRM integration in pages/api/contact.js before launch.",
  });
}
