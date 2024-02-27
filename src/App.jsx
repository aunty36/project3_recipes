import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className="home">
      <TopNav />
      <div className="hero">
        <h1>Easy Eats:</h1>
        <h2>25 Winning Recipes from a tiny Toronto apartment test kitchen</h2>
      </div>

      <MainContent />
      <Sidebar />

      <Footer />
    </div>
  )
}

export default App
