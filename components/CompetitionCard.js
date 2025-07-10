// components/CompetitionCard.js
import Link from 'next/link'
import Image from 'next/image'
import { BadgeInstantWin } from './Badges'

export default function CompetitionCard({ comp }) {
  const percent = Math.floor(comp.ticketsSold/comp.totalTickets*100)
  const price = (comp.ticketPrice - (comp.discount||0)).toFixed(2)
  return (
    <Link href={`/competitions/${comp.id}`}>
      <a className="group relative block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <div className="relative h-48">
          <Image src={comp.image} alt={comp.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition"/>
        </div>
        {comp.instantWinners?.length>0 && (
          <BadgeInstantWin className="absolute top-3 right-3"/>
        )}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition">
            {comp.title}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-blue-600">{price}€</span>
            {comp.discount>0 && (
              <span className="line-through text-gray-400">{comp.ticketPrice}€</span>
            )}
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-orange-500" style={{width:`${percent}%`}}/>
          </div>
          <div className="text-xs text-gray-600 mt-1">{percent}% ocupate</div>
        </div>
      </a>
    </Link>
  )
}
