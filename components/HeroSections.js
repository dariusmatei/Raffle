// components/HeroSection.js
import Link from 'next/link'

export default function HeroSection(){
  return (
    <div className="relative h-[70vh] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white/70 p-8 rounded-lg text-center max-w-lg">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          Could you be our next winner?
        </h1>
        <p className="mb-6 text-gray-700">
          Join Giveaway Arena and enter raffles, instant-win games & more.
        </p>
        <Link href="/competitions">
          <a className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            All Competitions
          </a>
        </Link>
      </div>
    </div>
  )
}
