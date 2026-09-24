import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex rounded-full bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
            Smart Learning
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Learn Better. Prepare Smarter.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Organize your study essentials with concise, easy-to-review notes across key subjects and technologies.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/notes"
              className="rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-primary-700"
            >
              Explore Notes
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Java', 'OOP & Core Concepts'],
              ['SQL', 'Database Queries'],
              ['HTML', 'Structure & Semantics'],
              ['React', 'Components & UI']
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
                <p className="mt-2 text-sm text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
