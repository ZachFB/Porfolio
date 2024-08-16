import { Competences } from "./components/features/Competences"
import { CanvasRevealEffectDemo2 } from "./components/features/ConduiteCards"
import { Contact } from "./components/features/Contact"
import Footer from "./components/features/Footer"
import { Hero } from "./components/features/Hero"
import { HeroDetail } from "./components/features/HeroDetail"
import { Navbar } from "./components/features/Navbar"
import { Projets } from "./components/features/Projets"
import { ThemeProvider } from "./components/features/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="dark:bg-[#0a001a] bg-[#efe5ff] h-full">
      <Navbar className="dark:bg-[#0a001a] bg-[#efe5ff] z-20"/>
      <Hero/>
      <HeroDetail/>
      <Competences/>
      <Projets/>
      <CanvasRevealEffectDemo2/>
      <Contact/>
      <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
