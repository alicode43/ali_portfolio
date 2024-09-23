import Image from 'next/image'
import HeroSection from './components/herosectiont'
import Navbar from './components/navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from "./components/AchivementsSection";
// import AchievementsSection from "./components/AchievementsSection";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-[8vw]">
      <Navbar/>
     <div className="container md:mx-auto mx-1 md:px-12 px-1 py-4">
      <HeroSection/>
      <AchievementsSection/>

      <AboutSection/>
      <ProjectSection/>
      <EmailSection/>
     </div>
      <Footer/>

     </main>
  )
}
