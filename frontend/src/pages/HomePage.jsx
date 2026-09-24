import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNotes } from '../services/api'
import HeroSection from '../components/HeroSection'
import CategoryCard from '../components/CategoryCard'
import NoteCard from '../components/NoteCard'
import LoadingSpinner from '../components/LoadingSpinner'

const categoryStyles = {
  Java: 'bg-blue-100 text-blue-700',
  SQL: 'bg-emerald-100 text-emerald-700',
  HTML: 'bg-amber-100 text-amber-700',
  CSS: 'bg-pink-100 text-pink-700',
  JavaScript: 'bg-yellow-100 text-yellow-700',
  React: 'bg-violet-100 text-violet-700',
  General: 'bg-slate-100 text-slate-700'
}

export default function HomePage() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getNotes()
        setNotes(response.data || [])
      } catch (err) {
        setError('Unable to load the latest notes right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  const categories = [...new Set(notes.map((note) => note.category))]
  const latestNotes = [...notes].slice(0, 4)

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">Popular Subjects</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore top learning tracks</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={category}
              title={category}
              count={notes.filter((note) => note.category === category).length}
              accent={Object.values(categoryStyles)[index % Object.values(categoryStyles).length]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">Latest Notes</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Fresh study resources</h2>
          </div>
          <Link to="/notes" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
            View all notes →
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {latestNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
