import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNotes } from '../services/api'
import SearchBar from '../components/SearchBar'
import NoteCard from '../components/NoteCard'
import LoadingSpinner from '../components/LoadingSpinner'

export default function NotesPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await getNotes()
        setNotes(response.data || [])
      } catch (err) {
        setError('Unable to load notes. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  const categories = useMemo(
    () => ['All', ...new Set(notes.map((note) => note.category))],
    [notes]
  )

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesSearch = note.title.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [notes, search, selectedCategory])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">All Notes</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Study resources</h1>
        </div>
        <Link to="/" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
          ← Back to home
        </Link>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-[1.4fr_0.6fr]">
        <SearchBar value={search} onChange={setSearch} />
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 shadow-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">{error}</div>
      ) : filteredNotes.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-semibold text-slate-700">No notes found.</p>
          <p className="mt-2 text-slate-500">Try another keyword or category filter.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </section>
  )
}
