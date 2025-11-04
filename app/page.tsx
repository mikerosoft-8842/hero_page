import Hero from '@/components/Hero'
import WorkExperience from '@/components/WorkExperience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkExperience />
      <Contact />
    </main>
  )
}
