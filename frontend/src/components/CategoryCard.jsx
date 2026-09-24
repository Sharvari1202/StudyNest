export default function CategoryCard({ title, count, accent }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className={`mb-4 inline-flex rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] ${accent}`}>
        {title}
      </div>
      <p className="text-sm text-slate-600">{count} notes</p>
    </div>
  )
}
