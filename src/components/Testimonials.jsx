import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sofia Nguyen",
    role: "Owner, Lilac Florals",
    quote:
      "Our online orders jumped within weeks. The site is gorgeous and so easy for customers.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Marcus Allen",
    role: "Manager, FitCorner Gym",
    quote:
      "Members love the mobile experience. Bookings are up and support has been excellent.",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ana Santos",
    role: "Founder, Bean & Bread",
    quote:
      "Sales increased and the checkout feels super smooth. Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Client Love</h2>
          <p className="mt-2 text-gray-600">Real results from local businesses.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <figcaption className="font-semibold text-gray-900">
                    {t.name}
                  </figcaption>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-700">“{t.quote}”</blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
