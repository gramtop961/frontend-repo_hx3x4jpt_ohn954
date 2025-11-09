import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      business_name: form.get("business_name") || undefined,
      message: form.get("message"),
      source: "portfolio",
    };

    setStatus({ loading: true, success: null, message: "" });

    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.detail || "Something went wrong");
      setStatus({ loading: false, success: true, message: data.message || "Thanks!" });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message });
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get a Free Quote</h2>
          <p className="mt-2 text-gray-600">
            Tell me about your project and I’ll reply within one business day.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jane@business.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Business Name</label>
              <input
                name="business_name"
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Lilac Florals"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What are you looking to build?"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                I’ll never share your information. No spam.
              </p>
              <button
                type="submit"
                disabled={status.loading}
                className="rounded-md bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:bg-blue-700 disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status.success === true && (
              <div className="sm:col-span-2 rounded-md border border-green-200 bg-green-50 p-3 text-green-700">
                {status.message}
              </div>
            )}
            {status.success === false && (
              <div className="sm:col-span-2 rounded-md border border-red-200 bg-red-50 p-3 text-red-700">
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
