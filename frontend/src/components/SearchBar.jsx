export default function SearchBar({ value, onChange, placeholder = 'Search notes...' }) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
        Search by title
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800 shadow-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}
