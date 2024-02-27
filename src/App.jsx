import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="home">
      <header>
        <TopNav />
      </header>
      <main>
        <h1>Easy Eats:</h1>
        <h2>25 Winning Recipes from a tiny Toronto apartment test kitchen</h2>
      </main>
      <sidebar>
        <h3>This is my sidebar</h3>
      </sidebar>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
