import './App.css'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Recipes from './components/Recipes'
import recipes_data from './data/recipes_data.json'

const App = () => {
  // console.log(recipes_data['recipes'])
  return (
    <div className="home">
      <TopNav />
      <div className="hero">
        <img src="./src/images/eats_logo.png" alt="Eats Food Blog logo"></img>
        <h4>25 Must Try Recipes from a tiny Toronto apartment test kitchen</h4>
      </div>
      {recipes_data['recipes'].map((recipe) => (
        <div className="main">
          <Recipes key="recipe_id" recipe={recipe} />
          {/* {recipe.recipe_tags.map((recipe_tag) => (
            <RecipeTag recipe_tag={recipe_tag} /> */}
        </div>
      ))}

      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
