import { motion } from "framer-motion";

const projects = [
  {
    title: "Local Bakery Shop",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop",
    impact: "+32% online orders in 60 days",
    desc: "Warm, welcoming brand and one‑tap checkout for repeat buyers.",
  },
  {
    title: "Neighborhood Gym",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    impact: "+18% membership sign‑ups",
    desc: "Mobile‑first class schedules and smooth onboarding flow.",
  },
  {
    title: "Floral Boutique",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
    impact: "+27% average order value",
    desc: "Product bundles and frictionless checkout reduce drop‑off.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Recent Work</h2>
            <p className="mt-2 text-gray-600">
              A selection of responsive e‑commerce sites built for local brands.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 md:inline-flex"
          >
            Start your project
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
                <div className="pt-1 text-sm font-medium text-blue-700">{p.impact}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
