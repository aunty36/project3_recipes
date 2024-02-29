const Recipes = (props) => {
  return (
    <div className="recipecard">
      <h2>{props.recipe.recipe_name}</h2>

      <div>
        <img src={props.recipe.recipe_photo} />
      </div>
      <div>{props.recipe.recipe_category}</div>
    </div>
  )
}

export default Recipes
