const Recipes = (props) => {
  // console.log(props.recipe)
  return (
    <div className="recipecard">
      <div classname="name">
        <h2>{props.recipe.recipe_name}</h2>
      </div>
      <div className="cat">
        <h3>{props.recipe.recipe_category}</h3>
      </div>
      <div className="flag">test</div>
      <div className="image">
        <img src={props.recipe.recipe_photo} />
      </div>
      <div className="content">
        <p>{props.recipe.recipe_desc}</p>
        <p>Region: {props.recipe.recipe_cuisine['country']}</p>
        <p>more stuff</p>
        <p>more stuff</p>
      </div>
    </div>
  )
}

export default Recipes
