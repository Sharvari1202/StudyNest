import { Link } from 'react-router-dom'

export default function NoteCard({ note }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">
          {note.category}
        </span>
        <span className="text-xs font-medium text-slate-500">#{note.id}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">{note.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{note.description}</p>

      <div className="mt-auto pt-6">
        <Link
          to={`/notes/${note.id}`}
          className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
