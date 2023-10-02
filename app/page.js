import Image from 'next/image'
import HomePage from '../components/home'
import TechStack from '@/components/techStack'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div>
      <HomePage />
      <TechStack />
      <Footer />
    </div>
  )
}
