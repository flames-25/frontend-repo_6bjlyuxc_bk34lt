import { useState } from 'react'
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-gray-900 text-lg">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Alex Carter</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pl-3 border-l border-black/10">
              <a href="mailto:alex.carter.dev@example.com" aria-label="Email" className="text-gray-700 hover:text-gray-900"><Mail className="h-5 w-5" /></a>
              <a href="https://instagram.com/alexcarter" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/alexcarter" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
         >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 pt-2">
              <a href="mailto:alex.carter.dev@example.com" aria-label="Email" className="text-gray-700 hover:text-gray-900"><Mail className="h-5 w-5" /></a>
              <a href="https://instagram.com/alexcarter" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-700 hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/alexcarter" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
