const Recipes = (props) => {
  // console.log(props.recipe)
  return (
    <div className="recipecard">
      <div classname="title">
        <h2>{props.recipe.recipe_name}</h2>
      </div>
      <div className="cat">
        <h3>{props.recipe.recipe_category}</h3>
      </div>
      <div className="flag">Some other content</div>
      <div className="image">
        <img src={props.recipe.recipe_photo} />
      </div>
      <div className="content">
        <p>Region: {props.recipe.recipe_cuisine['country']}</p>
        <p>{props.recipe.recipe_desc}</p>
        <p>Average Cost: {props.recipe.recipe_cost} </p>
        <p>
          Wanna try it out yourself? Click
          <a href={props.recipe.recipe_link}> here.</a>
        </p>
      </div>
    </div>
  )
}

export default Recipes
