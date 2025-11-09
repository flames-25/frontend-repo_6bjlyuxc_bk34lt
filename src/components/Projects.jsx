import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Hero',
    description: 'A playful, modern landing experience using Spline and React.',
    tags: ['React', 'Spline', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Design System Starter',
    description: 'Accessible components and tokens built with Tailwind and Radix.',
    tags: ['Tailwind', 'Radix', 'Accessibility'],
    github: '#',
    live: '#',
  },
  {
    title: 'Performance Toolkit',
    description: 'Profiling and audits for fast, resilient web apps.',
    tags: ['Web Vitals', 'Lighthouse', 'DX'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="h-5 w-5 text-indigo-600" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.github} className="inline-flex items-center gap-1 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.live} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
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
