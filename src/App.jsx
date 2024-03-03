import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import Recipe from './components/Recipe'
import RecipeTag from './components/RecipeTag'
import recipes_data from './data/recipes_data.json'

const App = () => {
  // console.log(recipes_data['recipes'])
  return (
    <div className="app">
      <TopNav />
      <div className="hero"></div>
      <div className="search">
        <h1>All Recipes </h1>
        <Search />
      </div>
      <div className="main">
        {recipes_data['recipes'].map((recipe) => (
          <Recipe key="recipe_id" recipe={recipe} />
        ))}
      </div>
      <div className="aside">
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default App
