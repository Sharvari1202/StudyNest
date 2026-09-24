import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900">
          StudyNest
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <Link to="/" className="transition hover:text-primary-600">Home</Link>
          <Link to="/notes" className="transition hover:text-primary-600">Notes</Link>
        </div>
      </nav>
    </header>
  )
}
