// pages/index.js
import HeroSection from '../components/HeroSection'
import CompetitionGrid from '../components/CompetitionGrid'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home({ competitions }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <HeroSection />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Drawing Soon</h2>
        <CompetitionGrid
          competitions={competitions.filter(c => {
            const hoursLeft = (new Date(c.drawDate) - new Date())/36e5
            return hoursLeft > 0 && hoursLeft <= 24
          })}
        />
      </section>
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Just Launched</h2>
        <CompetitionGrid
          competitions={competitions
            .sort((a,b)=>
              new Date(b.createdAt) - new Date(a.createdAt)
            )
            .slice(0,6)}
        />
      </section>
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
)

}

// încărcare competiții
import fs from 'fs'
import path from 'path'
export async function getStaticProps(){
  const data = fs.readFileSync(path.join(process.cwd(),'data','competitions.json'),'utf-8')
  return { props:{ competitions: JSON.parse(data) } }
}
