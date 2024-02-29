const Recipes = (props) => {
  return (
    <div className="recipecard">
      <h2>{props.recipe.recipe_name}</h2>
      <div className="recipecard_category">
        <h3>{props.recipe.recipe_category}</h3>
      </div>
      <div>
        <img src={props.recipe.recipe_photo} />
      </div>
    </div>
  )
}

export default Recipes
