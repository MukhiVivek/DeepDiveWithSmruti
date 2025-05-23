import './App.css'
import Achievements from './components/Achievements'
import Hero from './components/Hero/Herosection'
import LifeStoryTimeline from './components/LifeStory'

function App() {

  return (
    <div className=" dark:text-white min-h-screen mb-12">
      <Hero/>
      <Achievements />
      <LifeStoryTimeline />
    </div>
  )
}

export default App
