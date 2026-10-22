import Container from "./Container";

const listings = [
  {
    title: "2 BHK Apartment",
    location: "Indiranagar, Bengaluru",
    price: "₹1.35 Cr",
    beds: 2,
    area: "1,150 sq ft",
    tone: "bg-sky-100",
  },
  {
    title: "3 BHK Villa",
    location: "Whitefield, Bengaluru",
    price: "₹2.85 Cr",
    beds: 3,
    area: "2,400 sq ft",
    tone: "bg-amber-100",
  },
  {
    title: "1 BHK Studio",
    location: "Koramangala, Bengaluru",
    price: "₹68 Lakh",
    beds: 1,
    area: "620 sq ft",
    tone: "bg-emerald-100",
  },
  {
    title: "4 BHK Penthouse",
    location: "HSR Layout, Bengaluru",
    price: "₹4.2 Cr",
    beds: 4,
    area: "3,200 sq ft",
    tone: "bg-rose-100",
  },
  {
    title: "3 BHK Apartment",
    location: "Jayanagar, Bengaluru",
    price: "₹1.9 Cr",
    beds: 3,
    area: "1,680 sq ft",
    tone: "bg-violet-100",
  },
  {
    title: "2 BHK Garden Home",
    location: "Sarjapur Road, Bengaluru",
    price: "₹95 Lakh",
    beds: 2,
    area: "1,200 sq ft",
    tone: "bg-orange-100",
  },
];

const reasons = [
  {
    title: "Verified listings",
    body: "Every property is checked for clear title and approvals before it goes live.",
  },
  {
    title: "Local experts",
    body: "Our advisors know Bengaluru neighbourhoods, prices and commute patterns.",
  },
  {
    title: "Transparent pricing",
    body: "No hidden charges. You see our fees upfront before you commit.",
  },
  {
    title: "End-to-end support",
    body: "From site visits to paperwork and registration, we stay with you.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "₹15,000",
    note: "Listing support",
    features: [
      "Online listing for 60 days",
      "Basic photo guidance",
      "Enquiry forwarding",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹35,000",
    note: "Most popular",
    features: [
      "Featured listing for 90 days",
      "Professional photo shoot",
      "Social media promotion",
      "Buyer screening",
    ],
    highlight: true,
  },
  {
    name: "Full-service",
    price: "₹75,000",
    note: "Hands-off selling",
    features: [
      "Dedicated advisor",
      "Video walkthrough",
      "Negotiation support",
      "Legal and registration help",
    ],
    highlight: false,
  },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between py-4">
        <span className="text-lg font-bold text-slate-900">
          Prime Spaces Realty
        </span>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a href="#listings" className="hover:text-slate-950">
            Listings
          </a>
          <a href="#why-us" className="hover:text-slate-950">
            Why us
          </a>
          <a href="#pricing" className="hover:text-slate-950">
            Pricing
          </a>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <Container className="py-20 sm:py-28">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Find your next home in Bengaluru
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-300">
          Buy, sell or rent with advisors who know every neighbourhood.
        </p>
        <a
          href="#listings"
          className="mt-8 flex max-w-xl items-center justify-between rounded-full bg-white px-6 py-4 text-slate-600 shadow-lg"
        >
          <span>Search by area, budget or BHK</span>
          <span className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            Browse homes
          </span>
        </a>
      </Container>
    </section>
  );
}

export function Listings() {
  return (
    <section id="listings" className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900">Featured listings</h2>
        <p className="mt-2 text-slate-600">
          A hand-picked selection across popular Bengaluru neighbourhoods.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <article
              key={item.title + item.location}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div
                className={`flex h-40 items-center justify-center text-sm font-medium text-slate-500 ${item.tone}`}
                role="img"
                aria-label={`Placeholder photo for ${item.title}`}
              >
                Photo coming soon
              </div>
              <div className="p-5">
                <p className="text-xl font-bold text-slate-900">{item.price}</p>
                <h3 className="mt-1 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.location}</p>
                <p className="mt-3 text-sm text-slate-700">
                  {item.beds} bed · {item.area}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900">
          Why choose Prime Spaces
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title}>
              <h3 className="font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900">
          Plans for sellers and owners
        </h2>
        <p className="mt-2 text-slate-600">
          Placeholder demo pricing. Pick the level of support you need.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl border bg-white p-6 shadow-sm ${
                p.highlight
                  ? "border-slate-900 ring-2 ring-slate-900"
                  : "border-slate-200"
              }`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="text-sm text-slate-600">{p.note}</p>
              <p className="mt-4 text-3xl font-bold text-slate-900">{p.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 block rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <Container className="text-sm">
        <p className="font-semibold text-white">Prime Spaces Realty</p>
        <p className="mt-1">Bengaluru, Karnataka. Fictional demo agency.</p>
        <p className="mt-4 text-slate-400">
          Built as a training project. All listings, prices and plans are
          placeholders.
        </p>
      </Container>
    </footer>
  );
}
