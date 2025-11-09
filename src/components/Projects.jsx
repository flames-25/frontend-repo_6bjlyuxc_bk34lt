import { Instagram, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Notes',
    description: 'Shared notes with presence, CRDT syncing and offline support.',
    tags: ['React', 'WebSocket', 'Tailwind'],
    instagram: 'https://www.instagram.com/kelanaverse/',
    live: 'https://notes.example.com',
  },
  {
    title: '3D Portfolio Hero',
    description: 'Interactive Spline scene integrated with React for playful landing.',
    tags: ['React', 'Spline', 'Vite'],
    instagram: 'https://www.instagram.com/kelanaverse/',
    live: 'https://hero.example.com',
  },
  {
    title: 'Performance Toolkit',
    description: 'Lighthouse CI, Web Vitals dashboard and automated budgets.',
    tags: ['Web Vitals', 'Lighthouse', 'Node'],
    instagram: 'https://www.instagram.com/kelanaverse/',
    live: 'https://perf.example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="h-5 w-5 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-neutral-900">
                  <Instagram className="h-4 w-4" /> Insta
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
