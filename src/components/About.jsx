export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Designer-turned-developer</h2>
            <p className="mt-3 text-gray-600">I blend aesthetics with engineering to deliver thoughtful digital products. My focus is on performance, accessibility, and crafting delightful interactions that feel effortless on any device.</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <dt className="font-semibold text-gray-900">Core stack</dt>
                <dd className="mt-1 text-gray-600">React, TypeScript, FastAPI, Tailwind</dd>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <dt className="font-semibold text-gray-900">What I value</dt>
                <dd className="mt-1 text-gray-600">Clarity, performance, maintainability</dd>
              </div>
            </dl>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 via-white to-gray-100 border border-black/10 shadow-inner" />
          </div>
        </div>
      </div>
    </section>
  )
}
