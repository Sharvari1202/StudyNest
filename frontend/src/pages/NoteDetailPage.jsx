import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNoteById } from '../services/api'
import LoadingSpinner from '../components/LoadingSpinner'

export default function NoteDetailPage() {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getNoteById(id)
        setNote(response.data)
      } catch (err) {
        setError('This note could not be found or is unavailable.')
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
  }, [id])

  if (loading) return <LoadingSpinner />
  if (error)
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-red-700">{error}</div>
      </section>
    )
  if (!note) return null

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/notes" className="mb-8 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700">
        ← Back to Notes
      </Link>

      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
            {note.category}
          </span>
          <span className="text-sm text-slate-500">Note #{note.id}</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{note.title}</h1>
        <p className="mt-4 text-lg text-slate-600">{note.description}</p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-slate-700">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Content</h2>
          <p className="whitespace-pre-line leading-7">{note.content}</p>
        </div>
      </article>
    </section>
  )
}
