import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
            Alex Carter • Frontend & Full‑Stack Engineer
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            I build fast, modern products for the web
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            From interactive 3D experiences to robust APIs, I ship polished, accessible solutions that feel great on any device.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold border border-black/10 hover:bg-gray-50"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
