import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks, I'll get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Mail className="h-5 w-5 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Contact</h2>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border-neutral-300 bg-white text-neutral-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-neutral-300 bg-white text-neutral-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-md border-neutral-300 bg-white text-neutral-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition shadow-sm">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
