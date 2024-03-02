import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Recipe from './components/Recipe'
import RecipeTag from './components/RecipeTag'
import recipes_data from './data/recipes_data.json'

const App = () => {
  // console.log(recipes_data['recipes'])
  return (
    <div className="app">
      <TopNav />
      <div className="hero">
        <img src="/images/eats_logo.png" alt="Easy Eats logo"></img>
        <h4>25 Must Try Recipes from a Tiny Apartment Test Kitchen.</h4>
      </div>
      <div className="main">
        {recipes_data['recipes'].map((recipe) => (
          <Recipe key="recipe_id" recipe={recipe} />
        ))}
      </div>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
