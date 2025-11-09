import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Website Design",
    desc: "Clean, brand‑aligned designs focused on clarity and trust.",
  },
  {
    title: "E‑commerce Development",
    desc: "High‑converting storefronts with secure payments and smooth checkout.",
  },
  { title: "SEO Optimization", desc: "Technical SEO and on‑page best practices baked in." },
  { title: "Care & Maintenance", desc: "Updates, backups, performance monitoring, and support." },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Everything you need to get a modern online store live—and keep it
          growing.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
