import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add your form submission logic (e.g. API call)
    console.log("Form submitted:", form);

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-8 md:flex md:space-x-8">
        {/* Contact Info */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-green-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to work together? Fill out the form and I’ll
            get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                <path d="M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
              </svg>
              <span>contact@bangladeshiit.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72 12.15 12.15 0 005.67 5.67A2 2 0 0120 11v3z" />
                <path d="M16 7a4 4 0 01-8 0" />
              </svg>
              <span>+880 1234 567890</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 10h18M3 14h18M8 18h8M12 6h0" />
              </svg>
              <span>123, Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-6"
          noValidate
          autoComplete="off"
        >
          {submitted && (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md mb-4 text-center font-semibold">
              Thanks for reaching out! I will get back to you soon.
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-2 placeholder-transparent focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
              placeholder="Your Message"
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-md font-semibold shadow-md shadow-green-300/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
