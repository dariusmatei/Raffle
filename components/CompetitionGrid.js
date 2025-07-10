// components/CompetitionGrid.js
import CompetitionCard from './CompetitionCard'

export default function CompetitionGrid({ competitions }) {
  return (
    <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {competitions.map(c=>(
        <CompetitionCard key={c.id} comp={c}/>
      ))}
    </div>
  )
}
