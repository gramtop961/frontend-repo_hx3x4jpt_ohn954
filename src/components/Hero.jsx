import { motion } from "framer-motion";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              E‑commerce for Local Businesses
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Launch a store your customers will love
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              I design and build fast, mobile‑first e‑commerce websites that help
              local businesses sell more. From polished design to seamless
              checkout—every detail is optimized for conversion.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onCTAClick}
                className="rounded-md bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get a Free Quote
              </button>
              <a
                href="#portfolio"
                className="rounded-md border border-gray-300 px-5 py-3 text-gray-700 transition hover:bg-gray-50"
              >
                See recent work
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
              <div>
                <span className="font-semibold text-gray-900">20%+</span> avg. lift in online sales
              </div>
              <div>
                <span className="font-semibold text-gray-900">100%</span> mobile‑responsive
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop"
                alt="Showcase of responsive e‑commerce website"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
